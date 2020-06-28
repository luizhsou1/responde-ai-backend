import App from './app';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import QuestionController from './controllers/question-controller';
import FCMController from './controllers/fcm-controller';

const app = new App({
  port: 3000,
  middlewares: [cors(), morgan('dev'), bodyParser.urlencoded({ extended: false }), bodyParser.json()],
  controllers: [new QuestionController(), new FCMController()],
});

app.listen();
