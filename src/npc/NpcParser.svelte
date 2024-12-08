<script lang="ts">

   import {mainParse} from "./NpcParser";
   import {testFigher} from "./TestNpc";

   let textContent: string = '';

   let generateActor = false;
   let generateJournal = false;

   function handleSubmit() {
      if (textContent.length === 0) {
         textContent = testFigher;
      }

      const parsedData = mainParse(textContent);

      createActor(parsedData);
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

   async function createActor(parsedData) {
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

      return await Actor.create(actorData);
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
