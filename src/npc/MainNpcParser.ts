import * as cheerio from 'cheerio';

export function mainParse(content: string) {
  const $ = cheerio.load(content);
  // title
  const name = getName($);

  // race, class, alignment
  const raceClassAlignment = getRace($)

  // abilities
  const abilities = getAbilities($);

  const description = getDescription($);
  const personality = getPersonality($);
  const hp = getHp($);
  const ac = getAc($);
  const profBonus = getProfBonus($);
  const passivePerception = getPassivePerception($);

  const skills = getSkillProficiencies($);

  return {
    name,
    raceClassAlignment,
    abilities,
    description,
    personality,
    hp,
    ac,
    profBonus,
    passivePerception,
    skills
  }
}

function getName($: cheerio.CheerioAPI) {
  return $('h2.aligncenter').text();
}

function getRace($: cheerio.CheerioAPI) {
  // Select the second div and extract the text
  const aligncenterText = $('div.aligncenter').eq(1).text();

// Split the text using the delimiter "•"
  const parts = aligncenterText.split('•').map(part => part.trim());

// Assuming parts contains: ["Male Human", "Server", "LG"]
// Splitting the first part into gender and race
  const [gender, race] = parts[0].split(' ');

// Assign remaining parts for profession and alignment
  const profession = parts[1];
  const alignment = parts[2];

// Create a structured object
  return {
    gender,
    race,
    profession,
    alignment
  };
}


function getAbilities($: cheerio.CheerioAPI) {
  const abilities: { [key: string]: { value: number } } = {};

// Parse the data
  $('.flexboxes.abils .flexbox').each((index, element) => {
    const title = $(element).find('.abiltitle').text();
    const num = $(element).find('.abilnum').text();

    abilities[title] = {value: parseInt(num, 10)};
  });

// Output the parsed data as JSON
  return abilities;

}

function getDescription($: cheerio.CheerioAPI) {
  return $('.flexboxes.dets .flexbox').eq(0).find('p').eq(0).text();
}

function getPersonality($: cheerio.CheerioAPI) {
  return $('.flexboxes.dets .flexbox').eq(0).find('p').eq(1).text();
}

function getHp($: cheerio.CheerioAPI) {
  const hitPointsText = $('.flexboxes.dets .flexbox').eq(1).find('p').eq(0).text().match(/Hit Points:\s*(\d+)/);

  return hitPointsText ? parseInt(hitPointsText[1], 10) : null;
}

function getAc($: cheerio.CheerioAPI) {
  const acText = $('.flexboxes.dets .flexbox').eq(1).find('p').eq(0).text().match(/Base AC:\s*(\d+)/);

  return acText ? parseInt(acText[1], 10) : null;
}

function getProfBonus($: cheerio.CheerioAPI) {
  const profText = $('.flexboxes.dets .flexbox').eq(1).find('p').eq(0).text().match(/Proficiency Bonus:\s*([+-]?\d+)/);

  return profText ? parseInt(profText[1], 10) : null;
}

function getPassivePerception($: cheerio.CheerioAPI) {
  const profText = $('.flexboxes.dets .flexbox').eq(1).find('p').eq(0).text().match(/Passive Perception:\s*(\d+)/);

  return profText ? parseInt(profText[1], 10) : null;
}

function getSkillProficiencies($: cheerio.CheerioAPI) {
  // Initialize an array to store skill names
  const proficientSkills: string[] = [];

  // Select all `.skillslist` elements
  $('.skillslist').each((index, element) => {
    // Iterate through each <br>-separated line in the element
    $(element).html()?.split(/<br>/).forEach(line => {
      // Check if the line includes `<sup>★</sup>`
      if (/:\s*<sup>★<\/sup>/.test(line)) {
        // Extract the skill name before the colon
        const skillName = line.split(':')[0].trim();
        if (skillName) {
          proficientSkills.push(skillMapping[skillName]);
        }
      }
    });
  });

  return proficientSkills;
}

function getSkills($: cheerio.CheerioAPI, abilities) {
  $('.skillslist').each((index, element) => {
    const skills = $(element).html().split('<br>').filter(skill => skill.trim() !== '');
    skills.forEach(skill => {
      const [name, value] = skill.split(':').map(part => part.trim());
      const key = skillMapping[name];
      if (key) {
        getSkill(key, parseInt(value), abilities);
      } else {
        console.warn("not found", key);
      }
    });
  });
}

function getSkill(key, value, abilities) {
  const correspondingAbility = skillToAbility[key];
  if (correspondingAbility) {
    const modifier = Math.floor((abilities[correspondingAbility].value - 10) / 2)

    if (modifier === value) {
      console.log("Not proficient in", key);
    } else {
      console.log(`Proficient in ${key}: ${value} / ${modifier}`);
    }
  } else {
    console.warn("Skill-Ability missing", key);
  }
}

const skillToAbility = {
  "acr": "dex",
  "ani": "wis",
  "arc": "int",
  "ath": "str",
  "cul": "int",
  "dec": "cha",
  "eng": "int",
  "his": "int",
  "ins": "wis",
  "itm": "cha",
  "inv": "int",
  "med": "wis",
  "nat": "int",
  "prc": "wis",
  "prf": "cha",
  "per": "cha",
  "rel": "int",
  "slt": "dex",
  "ste": "dex",
  "sur": "wis"
}

const skillMapping = {
  "Acrobatics": "acr",
  "Animal Handling": "ani",
  "Arcana": "arc",
  "Athletics": "ath",
  "Deception": "dec",
  "History": "his",
  "Insight": "ins",
  "Intimidation": "itm",
  "Investigation": "inv",
  "Medicine": "med",
  "Nature": "nat",
  "Perception": "prc",
  "Performance": "prf",
  "Persuasion": "per",
  "Religion": "rel",
  "Sleight of Hand": "slt",
  "Stealth": "ste",
  "Survival": "sur"
};
