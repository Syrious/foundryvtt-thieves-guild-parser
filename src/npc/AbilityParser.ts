import * as cheerio from 'cheerio';

export function parseAbilities(content: string) {

// Your HTML content
  const example = `
<div class="flexboxes abils">
    <div class="flexbox">
        <div class="abiltitle">str</div>
        <div class="abilnum">8</div>
        <div class="abilmod">-1</div>
    </div>
    <div class="flexbox">
        <div class="abiltitle">dex</div>
        <div class="abilnum">7</div>
        <div class="abilmod">-2</div>
    </div>
    <div class="flexbox">
        <div class="abiltitle">con</div>
        <div class="abilnum">8</div>
        <div class="abilmod">-1</div>
    </div>
    <div class="flexbox">
        <div class="abiltitle">int</div>
        <div class="abilnum">12</div>
        <div class="abilmod">+1</div>
    </div>
    <div class="flexbox">
        <div class="abiltitle">wis</div>
        <div class="abilnum">15</div>
        <div class="abilmod">+2</div>
    </div>
    <div class="flexbox">
        <div class="abiltitle">cha</div>
        <div class="abilnum">11</div>
        <div class="abilmod">0</div>
    </div>
</div>
`;

// Load the HTML content
  const $ = cheerio.load(content);

// Parse the data
  const abilities = [];

  $('.flexbox').each((index, element) => {
    const title = $(element).find('.abiltitle').text();
    const num = $(element).find('.abilnum').text();
    const mod = $(element).find('.abilmod').text();

    abilities.push({title, num: parseInt(num, 10), mod});
  });

// Output the parsed data as JSON
  console.log(JSON.stringify(abilities, null, 2));

}
