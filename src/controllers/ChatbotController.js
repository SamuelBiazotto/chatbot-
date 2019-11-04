'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const Chatbot = new Telegram.Telegram('************************************');
// const bot = new Telegram(Chatbot, {polling: true});
 class EventsController extends TelegramBaseController {
   sayAction(scope) {
      let msg = `QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br`
      scope.sendMessage(msg);
   }

   
   
   // leaozinhoAction(scope) {
   //    let msg = `S2 S2 S2`
   //    scope.sendMessage(msg);
   // }

   poppiAction(scope){
      let msg = `Eita, Oloco bixo !!!!!!!`
      scope.sendMessage(msg);
   }

   get routes() {
      return {
         'say': 'sayAction',
         'poppi': 'poppiAction'
      }
   }
}

module.exports = {
   test: Chatbot.router.when(new TextCommand('/say', 'say'), new EventsController()),
   test3: Chatbot.router.when(new TextCommand('/Poppi', 'poppi'), new EventsController())
};

// module.exports = {
//    EventsController: EventsController,
//    TextCommand: TextCommand,
//    Chatbot: Chatbot};
