import { Request, Response, Router } from 'express';

export default class HomeController {
  private readonly router = Router();
  private path = '/';

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.helloWorld);
  }

  private helloWorld(req: Request, res: Response) {
    return res.json({ msg: 'Hello World from Express + Typescript' });
  }
}
