import fs from 'fs';
import { Request, Response } from 'express';
import FCMModel, { IFCM, IFCMMongo } from '../models/fcm-model';
import serverError from './server-error';
import env from '../config/env';
import { randomMessage } from '../config/messages-notification';
import admin from 'firebase-admin';

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

  static async sendNotifications(tokens: Array<string>, question: string, data: { appId: string }) {
    const message = {
      notification: {
        title: randomMessage(),
        body: question,
      },
      tokens,
      data,
    };

    console.log(env.pathFirebaseJson);
    if (fs.existsSync(env.pathFirebaseJson)) {
      console.log('Entrou no if');

      if (!admin.apps.length) {
        const serviceAccount = require(env.pathFirebaseJson);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: 'https://responde-ai-cloud.firebaseio.com',
        });
      }

      // Se produção envia a mensagem via FCM
      if (process.env.PORT) {
        admin
          .messaging()
          .sendMulticast(message)
          .then((response) => console.log(response.successCount + ' messages were sent successfully'));
      } else console.log(message);
    } else {
      console.log('Não foi possível enviar a mensagem abaixo para os celulares, pois o arquivo de configuração do firebase não existe!');
      console.log(message);
    }
  }
}
