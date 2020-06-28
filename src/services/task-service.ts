import { Request, Response } from 'express';
import TaskModel, { ITask } from '../models/task-model';

export default class TaskService {
  public findAll(req: Request, res: Response) {
    return res.status(200).json([]);
  }

  public async create(req: Request, res: Response) {
    const data = req.body as ITask;
    const task = await TaskModel.create(data);
    return res.json({ task });
  }
}
