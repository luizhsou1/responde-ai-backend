import { Request, Response } from 'express';
import QuestionModel, { IQuestion, IQuestionMongo } from '../models/question-model';
import serverError from './server-error';
import FCMService from './fcm-service';
import FCMModel, { IFCMMongo } from '../models/fcm-model';

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

      const list: Array<IFCMMongo> = await FCMModel.find({});
      const fcms = list.filter((e) => e.token !== question.tokenOrigin);
      FCMService.sendNotifications(fcms.map((e) => e.token) as Array<string>, question.description as string, { appId: question.appId as string });

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
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      await QuestionModel.remove({ appId: req.params.appId });
      return res.status(200).json({});
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  public async answer(req: Request, res: Response) {
    try {
      const appId = req.params.appId;
      const { idAlternative, token } = req.body;

      const result = await QuestionModel.find({ appId });
      const question = result[0];

      if (!question.tokensFCM.includes(token)) {
        question.tokensFCM.push(token);
        question.alternatives.forEach((e: any) => {
          if (e._id == idAlternative) {
            e.selectedQuantity++;
          }
        });

        await QuestionModel.update(
          {
            appId,
          },
          { $set: question },
          { multi: false },
        );

        return res.status(200).json(question);
      } else {
        res.status(400).json({ message: 'Token already answered this question' });
      }
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }
}
