import fs from 'fs';
import env from './config/env';
import express, { Application } from 'express';
import mongoose from 'mongoose';

class App {
  private readonly app: Application;
  private port: number;

  constructor(config: { middlewares: any; controllers: any }) {
    this.app = express();
    this.port = env.port;
    this.setConnectionDB();
    this.createFileConfigFirebase();
    this.setMiddlewares(config.middlewares);
    this.setControllers(config.controllers);
  }

  public listen() {
    this.app.listen(this.port, () => console.log(`Server is running...`));
  }

  private setMiddlewares(middlewares: { forEach: (mid: (middleware: any) => void) => void }) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private setControllers(controllers: { forEach: (mid: (controller: any) => void) => void }) {
    controllers.forEach((controller) => {
      this.app.use('/api/', controller.router);
    });
  }

  private setConnectionDB() {
    mongoose.connect(env.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).catch((error) => {
      throw new Error('Não foi possível conectar no MongoDB...');
    });
  }

  private createFileConfigFirebase() {
    if (process.env.PORT) {
      fs.writeFile('responde-ai-cloud-firebase-adminsdk.json', require('./config/firebase-config'), function (err) {
        if (err) throw err;
        console.log('File Firebase Config created');
      });
    }
  }
}

export default App;
