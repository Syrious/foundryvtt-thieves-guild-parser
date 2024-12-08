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

  const skills = getSkills($);
  // console.log(passivePerception)
  // description, personality, other stats and skills
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

function getSkills($: cheerio.CheerioAPI){
  $('.skillslist').each((index, element) => {
    const skills = $(element).html().split('<br>').filter(skill => skill.trim() !== '');
    skills.forEach(skill => {
      const [name, value] = skill.split(':').map(part => part.trim());
      const key = skillMapping[name];
      if (key) {
        getSkill(key, value);
      }else{
        console.warn("not found", key);
      }
    });
  });
}

function getSkill(key, value) {
  console.log(`Skill key: ${key}`);
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
