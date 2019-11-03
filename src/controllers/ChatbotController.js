'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const Chatbot = new Telegram.Telegram('867544718:AAEXUqHzYm4gQ_1WnpSWpwial75m0wEeUAI');
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
      let msg = `Cagou No Pau !!!!!!!`
      scope.sendMessage(msg);
   }

   get routes() {
      return {
         'say': 'sayAction',
         // 'leaozinho': 'leaozinhoAction',
         'poppi': 'poppiAction'
      }
   }
}

module.exports = {
   test: Chatbot.router.when(new TextCommand('/say', 'say'), new EventsController()),
   // test2: Chatbot.router.when(new TextCommand('/leaozinho', 'leaozinho'), new EventsController()),
   test3: Chatbot.router.when(new TextCommand('/Poppi', 'poppi'), new EventsController())
};

// module.exports = {
//    EventsController: EventsController,
//    TextCommand: TextCommand,
//    Chatbot: Chatbot};