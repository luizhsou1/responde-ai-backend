import { Request, Response } from 'express';
import QuestionModel, { IQuestion, IQuestionMongo } from '../models/question-model';

export default class QuestionService {
  public async findAll(req: Request, res: Response) {
    const list: Array<IQuestionMongo> = await QuestionModel.find({});
    return res.status(200).json(list);
  }
  public async findByAppID(req: Request, res: Response) {
    const question = await QuestionModel.find({ appId: req.params.appId });
    return res.status(200).json(question);
  }

  public async create(req: Request, res: Response) {
    const data = req.body as IQuestion;
    const question = await QuestionModel.create(data);
    return res.status(201).json(question);
  }
}
