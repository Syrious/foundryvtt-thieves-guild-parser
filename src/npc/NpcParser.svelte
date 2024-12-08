<script lang="ts">

   import {mainParse} from "./MainNpcParser";

   let textContent: string = '';

   function handleSubmit() {
      // console.log('Text submitted:', textContent);
      mainParse(textContent)
      // createAiActor();
   }

   async function createAiActor() {
      let newActor = await Actor.create({
         name: "New Test Actor",
         type: "npc",
         img: "icons/svg/mystery-man.svg"
      });

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
