<script lang="ts">

   import {mainParse} from "./NpcParser";
   import {testFigher} from "./TestNpc";

   let textContent: string = '';

   let generateActor = false;
   let generateJournal = false;

   async function handleSubmit() {
      if (textContent.length === 0) {
         textContent = testFigher;
      }

      const parsedData = mainParse(textContent);

      let actorUUID;
      if (generateActor) {
         actorUUID = await createActor(parsedData);
      }

      if (generateJournal) {
         await createJournal(parsedData, actorUUID);
      }
   }

   function getProficientSkills(skills) {
      const jsonObject = {};


      skills.forEach(key => {
         jsonObject[key] = {
            "proficient": 1
         };
      });

      return jsonObject;
   }

   async function createActor(parsedData: {
      abilities: { [p: string]: { value: number } };
      skills: string[];
      ac: number;
      passivePerception: number;
      personality: any;
      raceClassAlignment: { profession: any; gender: any; race: any; alignment: any };
      name: any;
      hp: number;
      profBonus: number;
      description: any
   }) {
      const actorData = {
         name: parsedData.name,
         type: "npc",
         img: "icons/svg/mystery-man.svg",
         system: {
            abilities: parsedData.abilities,
            attributes: {
               ac: {
                  baseFormula: parsedData.ac
               },
               hp: {
                  baseMax: parsedData.hp,
                  value: parsedData.hp
               }
            },
            skills: getProficientSkills(parsedData.skills),
            details: {
               bio: await TextEditor.enrichHTML(parsedData.description + "<br> <br>" + parsedData.personality)
            }
         }
      }

      let actor = await Actor.create(actorData);
      return actor.id;
   }

   async function createJournal(actorData: any, actorUUID: string) {
      console.log("UUID", actorUUID);

      let pageData = {
         name: actorData.name,
         flags: {
            "monks-enhanced-journal": {
               pagetype: "person",
               img: "modules/monks-enhanced-journal/assets/person.png"
            }
         },
         pages: [
            {
               type: "text",
               name: actorData.name,
               flags: {
                  "monks-enhanced-journal": {
                     type: "person"
                  }
               },
               role: "",
               location: "",
               attributes: {
                  ancestry: "",
                  age: "",
                  eyes: "",
                  hair: "",
                  voice: "",
                  traits: "",
                  ideals: "",
                  bonds: "",
                  flaws: ""
               },
               text: {
                  format: 1,
                  content: actorData.description + "<br> <br>" + actorData.personality
               },
               src: null,
               sort: 0,
            }
         ],
         folder: null,
      };

      if (actorUUID) {
         pageData.pages[0].flags["monks-enhanced-journal"].actor = {
            id: actorUUID,
            uuid: "Actor." + actorUUID,
            img: "icons/svg/mystery-man.svg",
            name: actorData.name,
            quantity: "1"
         }

      }

      return await JournalEntry.create(pageData)
   }
</script>

<div>
   <textarea bind:value={textContent} placeholder="Enter your text here..."></textarea>
   <div class="checkboxes">
      <label>
         <input type="checkbox" bind:checked={generateActor}>
         <span class="checkbox-label">Generate Actor</span>
      </label>
      <label>
         <input type="checkbox" bind:checked={generateJournal}>
         <span class="checkbox-label">Generate Journal</span>
      </label>
   </div>
   <button on:click={handleSubmit}>Submit</button>
</div>

<style lang="scss">
   .checkboxes {
      display: flex;
   }

   label {
      display: flex;
      align-items: center;
      margin-bottom: 8px; /* optional spacing between checkboxes */
   }

   textarea {
      width: 100%;
      height: 200px;
      resize: vertical;
   }

   button {
      margin-top: 10px;
   }
</style>
