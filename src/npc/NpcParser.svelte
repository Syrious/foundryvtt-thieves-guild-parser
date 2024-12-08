<script lang="ts">

   import {mainParse} from "./MainNpcParser";
   import {testFigher} from "./TestData";
   import {parse} from "@typhonjs-fvtt/runtime/data/format/jsonc";

   let textContent: string = '';

   function handleSubmit() {
      // console.log('Text submitted:', textContent);
      if(textContent.length === 0){
         textContent = testFigher;
      }

      const parsedData = mainParse(textContent);

      createActor(parsedData);
   }

   function getSkills(skills){
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
         system:{
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
            skills: getSkills(parsedData.skills),
            details:{
               bio: await TextEditor.enrichHTML(parsedData.description + "<br> <br>" + parsedData.personality)
            }
         }
      }

      console.log(actorData)

      let newActor = await Actor.create(actorData);
      return newActor;
   }
</script>

<style>
   textarea {
      width: 100%;
      height: 200px;
      resize: vertical;
   }

   button {
      margin-top: 10px;
   }
</style>

<div>
   <textarea bind:value={textContent} placeholder="Enter your text here..."></textarea>
   <button on:click={handleSubmit}>Submit</button>
</div>
