import { Request, Response } from 'express';
import QuestionModel, { IQuestion, IQuestionMongo } from '../models/question-model';
import serverError from './server-error';

export default class QuestionService {
  public async findAll(req: Request, res: Response) {
    try {
      const list: Array<IQuestionMongo> = await QuestionModel.find({});
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }
  public async findByAppID(req: Request, res: Response) {
    try {
      const question = await QuestionModel.find({ appId: req.params.appId });
      return res.status(200).json(question);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const data = req.body as IQuestion;
      const question = await QuestionModel.create(data);
      return res.status(201).json(question);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  public async update(req: Request, res: Response) {
    const data = req.body as IQuestion;
    try {
      await QuestionModel.update(
        {
          appId: data.appId,
        },
        { $set: data },
        { multi: false },
      );
      return res.status(200).json([]);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }
}
