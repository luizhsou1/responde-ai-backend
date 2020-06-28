import App from './App';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';

const app = new App({
  port: 3000,
  middlewares: [morgan('dev'), bodyParser.urlencoded({ extended: false }), bodyParser.json()],
  controllers: [],
});

app.listen();
