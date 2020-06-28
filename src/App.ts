import express, { Application } from 'express';

class App {
  private readonly app: Application;
  private port: number;

  constructor(config: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = config.port;
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
      this.app.use('/', controller);
    });
  }
}

export default App;
