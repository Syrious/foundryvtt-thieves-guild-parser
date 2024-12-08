import BasicApplication from "./view/BasicApplication.js";

Hooks.on('renderSidebarTab', (app, html) => {
   console.warn(app)
   if (game.user.isGM && (app?.id ?? app?.options?.id) === 'actors') {
      html.find('.thieves-guild-parser').remove();

      const button = $('<button class="thieves-guild-parser">Parse Thieves Guild Actor</button>');

      button.on('click', () => {
         new BasicApplication().render(true);
      });

      html.find('.header-actions')
         .append(button);
   }
});
