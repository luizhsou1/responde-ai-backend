import App from './app';

// Middlewares
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

// Controllers
import QuestionController from './controllers/question-controller';
import FCMController from './controllers/fcm-controller';

const app = new App({
  middlewares: [cors(), morgan('dev'), bodyParser.urlencoded({ extended: false }), bodyParser.json()],
  controllers: [new QuestionController(), new FCMController()],
});

app.listen();
