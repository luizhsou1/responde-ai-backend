import App from './app';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import TaskController from './controllers/task-controller';

const app = new App({
  port: 3000,
  middlewares: [cors(), morgan('dev'), bodyParser.urlencoded({ extended: false }), bodyParser.json()],
  controllers: [new TaskController()],
});

app.listen();
