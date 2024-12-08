import { SvelteApplication }  from '#runtime/svelte/application';

import BasicAppShell          from './BasicAppShell.svelte';

export default class BasicApplication extends SvelteApplication
{
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: 'Thieves Guild NPC Parser',  // Automatically localized from `lang/en.json`.
         width: 500,

         svelte: {
            class: BasicAppShell,
            target: document.body
         }
      });
   }
}
