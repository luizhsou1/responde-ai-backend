import { Request, Response } from 'express';

export default class TaskService {
  public helloWorld(req: Request, res: Response) {
    return res.json({ msg: 'Hello World from Express + Typescript' });
  }
}
