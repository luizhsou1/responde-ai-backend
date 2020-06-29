import { Request, Response } from 'express';
import FCMModel, { IFCM, IFCMMongo } from '../models/fcm-model';
import serverError from './server-error';

export default class FCMService {
  public async findAll(req: Request, res: Response) {
    try {
      const list: Array<IFCMMongo> = await FCMModel.find({});
      return res.status(200).json(list);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const data = req.body as IFCM;
      const fcm = await FCMModel.create(data);
      return res.status(201).json(fcm);
    } catch (e) {
      return res.status(500).json(serverError);
    }
  }

  static async sendNotifications(tokens: [string]) {
    console.log('----------------------');
    console.log('Notificandos os tokens:');
    console.log(tokens);
  }
}
