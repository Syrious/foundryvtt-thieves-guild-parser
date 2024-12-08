export const testFigher = `<div class="page-border npc" style="margin-bottom: 20px;">
    <!--
    <div class="headerimg">
        <img src="https://www.thievesguild.cc/images/header-npc.jpg" alt="Online npc generator for Dnd" />
    </div>
    -->

    <div class="titlebox wseal" style="margin-bottom:10px; ">
        <div class="breadcrumbs">
            <a href="https://www.thievesguild.cc/">The Thieves Guild</a> &gt; NPC generator
        </div>
        <div class="titleseal">
            <img src="https://www.thievesguild.cc/images/seal-npc.png" alt="D&amp;D NPC generator">
        </div>
        <div class="titlemain"><h1>NPC Generator</h1></div>
        <div class="runetitle">Create NPCs Online</div>
    </div>

    <div class="searchform aligncenter" style="border-bottom: 1px solid #a1a1a1; padding-bottom: 10px; margin-bottom: 20px;">
        <form action="/npc/index.php" method="post" enctype="multipart/form-data">
            <input type="hidden" name="submitted" value="1">

            <div class="sflditem">
                <div class="sfldlabel">Gender:</div>
                <div class="sfldinput">
                    <select name="s" class="input-sel">
                        <option value="" selected="">– All –</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
            </div><!-- .sflditem -->

            <div class="sflditem">
                <div class="sfldlabel">Race:</div>
                <div class="sfldinput">
                    <select name="r" class="input-sel">
                        <option value="" selected="">– All –</option>
                        <option value="Human">Human</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Half-Orc">Half-Orc</option>
                        <option value="Aasimar">Aasimar</option>
                        <option value="Goliath">Goliath</option>
                        <option value="Dragonborn">Dragonborn</option>
                        <option value="Kenku">Kenku</option>
                        <option value="Firbolg">Firbolg</option>
                        <option value="Goblin">Goblin</option>
                        <option value="Lizardfolk">Lizardfolk</option>
                        <option value="Medusa">Medusa (Female Only)</option>
                        <option value="Orc">Orc</option>
                        <option value="Troglodyte">Troglodyte</option>
                        <option value="Tabaxi">Tabaxi</option>
                        <option value="Tiefling">Tiefling</option>
                        <option value="Triton">Triton</option>
                    </select>
                </div>
            </div><!-- .sflditem -->

            <div class="sflditem">
                <div class="sfldlabel">Class/Profession:</div>
                <div class="sfldinput">
                    <select name="c" class="input-sel">
                        <option value="">– All –</option>
                        <option value="Artificier">Artificier</option>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter" selected="">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Mystic">Mystic</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                        <option value="">–---- Profession ----–</option>
                        <option value="Acolyte">Acolyte</option>
                        <option value="Acrobat">Acrobat</option>
                        <option value="Actor">Actor</option>
                        <option value="Armorer">Armorer</option>
                        <option value="Astrologer">Astrologer</option>
                        <option value="Baker">Baker</option>
                        <option value="Bandit">Bandit</option>
                        <option value="Banker">Banker</option>
                        <option value="Barber">Barber</option>
                        <option value="Barrister">Barrister</option>
                        <option value="Begger">Begger</option>
                        <option value="Blacksmith">Blacksmith</option>
                        <option value="Boat">Boat</option>
                        <option value="Bodyguard">Bodyguard</option>
                        <option value="Bounty Hunter">Bounty Hunter</option>
                        <option value="Bowyer">Bowyer</option>
                        <option value="Brewer">Brewer</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Cartographer">Cartographer</option>
                        <option value="Clothier">Clothier</option>
                        <option value="Clown">Clown</option>
                        <option value="Coach">Coach</option>
                        <option value="Cook">Cook</option>
                        <option value="Dancer">Dancer</option>
                        <option value="Diplomat">Diplomat</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Explorer">Explorer</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Fence">Fence</option>
                        <option value="Fisher">Fisher</option>
                        <option value="Forester">Forester</option>
                        <option value="Fortune-Teller">Fortune-Teller</option>
                        <option value="Funambulist">Funambulist</option>
                        <option value="Furrier">Furrier</option>
                        <option value="Gladiator">Gladiator</option>
                        <option value="Goldsmith">Goldsmith</option>
                        <option value="Gravedigger">Gravedigger</option>
                        <option value="Herald">Herald</option>
                        <option value="Hermit">Hermit</option>
                        <option value="Historian">Historian</option>
                        <option value="Innkeeper">Innkeeper</option>
                        <option value="Jailer">Jailer</option>
                        <option value="Jeweler">Jeweler</option>
                        <option value="Juggler">Juggler</option>
                        <option value="Knight">Knight</option>
                        <option value="Leatherworker">Leatherworker</option>
                        <option value="Locksmith">Locksmith</option>
                        <option value="Mason">Mason</option>
                        <option value="Medic">Medic</option>
                        <option value="Merchant">Merchant</option>
                        <option value="Messenger">Messenger</option>
                        <option value="Miller">Miller</option>
                        <option value="Miner">Miner</option>
                        <option value="Minister">Minister</option>
                        <option value="Musician">Musician</option>
                        <option value="Neophyte">Neophyte</option>
                        <option value="Page">Page</option>
                        <option value="Painter">Painter</option>
                        <option value="Peddler">Peddler</option>
                        <option value="Philosopher">Philosopher</option>
                        <option value="Pickpocket">Pickpocket</option>
                        <option value="Poet">Poet</option>
                        <option value="Prestidigitator">Prestidigitator</option>
                        <option value="Procurer">Procurer</option>
                        <option value="Prostitute">Prostitute</option>
                        <option value="Ratcatcher">Ratcatcher</option>
                        <option value="Sailor">Sailor</option>
                        <option value="Scribe">Scribe</option>
                        <option value="Server">Server</option>
                        <option value="Sheppard">Sheppard</option>
                        <option value="Slaver">Slaver</option>
                        <option value="Smuggler">Smuggler</option>
                        <option value="Soldier">Soldier</option>
                        <option value="Squire">Squire</option>
                        <option value="Storyteller">Storyteller</option>
                        <option value="Tinker">Tinker</option>
                        <option value="Torturer">Torturer</option>
                        <option value="Trader">Trader</option>
                        <option value="Trapper">Trapper</option>
                        <option value="Wandering Pilgrim">Wandering Pilgrim</option>
                        <option value="Weaver">Weaver</option>
                    </select>
                </div>
            </div><!-- .sflditem -->

            <div class="sflditembrk"></div>

            <div class="sflditembut">
                <button type="submit" class="redbut smallbut">Submit / Reroll</button>
            </div>

        </form>


    </div>


    <h2 class="aligncenter" style="margin-bottom:5px;">Gyliam Dobra</h2>
    <div class="aligncenter" style="margin-bottom:10px;">Male Human • Fighter • N</div>

    <div class="flexboxes abils">
        <div class="flexbox">
            <div class="abiltitle">str</div>
            <div class="abilnum">16</div>
            <div class="abilmod">+3</div>
        </div>
        <div class="flexbox">
            <div class="abiltitle">dex</div>
            <div class="abilnum">8</div>
            <div class="abilmod">-1</div>
        </div>
        <div class="flexbox">
            <div class="abiltitle">con</div>
            <div class="abilnum">17</div>
            <div class="abilmod">+3</div>
        </div>
        <div class="flexbox">
            <div class="abiltitle">int</div>
            <div class="abilnum">7</div>
            <div class="abilmod">-2</div>
        </div>
        <div class="flexbox">
            <div class="abiltitle">wis</div>
            <div class="abilnum">13</div>
            <div class="abilmod">+1</div>
        </div>
        <div class="flexbox">
            <div class="abiltitle">cha</div>
            <div class="abilnum">7</div>
            <div class="abilmod">-2</div>
        </div>
    </div>


    <div class="flexboxes dets">
        <div class="flexbox">
            <h3>Description</h3>
            <p>
                Gyliam Dobra is a 35 year old male human fighter (lev 2)<br>He has very long, curled, auburn hair shaved on the left side and brown eyes.<br>He has smooth, chocolate skin.<br>He stands 5'5" (167 cm) and has a round build.<br>He has a round face.<br>.<br><br>Sexual Orientation: Straight<br>Relationship Status Single<br>
            </p>


            <h3>Personality Traits</h3>
            <p>
                He doesn't worship any god.<br><br>He is very competitive.<br>He is very quick to trust other people.<br>He occasionally asks questions.<br>He judges people based on their fighting skills.<br>        </p>
        </div>

        <div class="flexbox">

            <h3>Other Stats &amp; Skills</h3>
            <p>
                <!-- LEV : 2 --><!-- pfbon : 2 --><!-- backg :  --><!-- ClassofProf: 1  --><!-- CHeck 1 --><!-- CHeck 2 --><!-- skillnum array: 2 --><!-- skilnum : 2 --><!-- skilnum IS NOT ARRAY--><!-- CHeck 3 -->Level 2 Fighter<br>Human<br>
                <br><!-- CHeck 4 -->
                Hit Points: 18<br>
                Base AC: 9<br>
                Proficiency Bonus: +2<br>
                <br>
                <b>Passive Perception:</b> 11
                <style>
                    .skillslist { width:50%; float:left; }
                    .skillslist sup { color:#ffb612; }
                </style>
            </p><div class="display:block;">
            <div class="skillslist">
                Acrobatics: -1<br>
                Animal Handling: +1<br>
                Arcana: -2<br>
                Athletics:<sup>★</sup> +5<br>
                Deception: -2<br>
                History: -2<br>
                Insight: +1<br>
                Intimidation: -2<br>
                Investigation: -2<br>
            </div>
            <div class="skillslist">
                Medicine: +1<br>
                Nature: -2<br>
                Perception: +1<br>
                Performance: -2<br>
                Persuasion: -2<br>
                Religion: -2<br>
                Sleight of Hand: -1<br>
                Stealth:<sup>★</sup> +1<br>
                Survival: +1                </div>
        </div>
            <p></p>

            <p style="line-height: 1; margin-bottom:0;">
            <span class="smallgray"><sup>★</sup> Skill Proficiency<br>
                <sup>†</sup> Medium-sized creatures without a class have 1d8 hp; Small creatures have 1d6;<br>
                Non-adventurers have racial skill proficiencies and have the possibility of having a background (with proficiency in related skills). Adventurer NPCs (characters with classes), range from level 1-9 (leaning heavily toward the lower levels). Proficiency bonuses are based on those levels (i.e. level 1-4 have a +2 proficiency)</span>
            </p>


        </div>
    </div>
    <div class="flexboxes full">
        <div class="flexbox" style="margin: 5px 5px 0 5px;">
            <h3>Plot Hook</h3>He is looking for his lost brother.<br>    </div>
    </div>

</div>`
