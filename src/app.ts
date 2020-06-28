import express, { Application } from 'express';
import mongoose from 'mongoose';

class App {
  private readonly app: Application;
  private port: number;

  constructor(config: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = config.port;
    this.setConnectionDB();
    this.setMiddlewares(config.middlewares);
    this.setControllers(config.controllers);
  }

  public listen() {
    this.app.listen(this.port, () => console.log('Server is running...'));
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
    mongoose.connect('mongodb://localhost:27017/respondeAi', { useNewUrlParser: true, useUnifiedTopology: true });
  }
}

export default App;
