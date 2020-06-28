import { Request, Response } from 'express';
import TaskModel, { ITask, ITaskMongo } from '../models/task-model';

export default class TaskService {
  public async findAll(req: Request, res: Response) {
    const list: Array<ITaskMongo> = await TaskModel.find({});
    return res.json({ list });
  }

  public async create(req: Request, res: Response) {
    const data = req.body as ITask;
    const task = await TaskModel.create(data);
    return res.json({ task });
  }
}
