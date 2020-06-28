import FCMService from '../services/fcm-service';
import { Router } from 'express';

export default class FCMController {
  private readonly router = Router();
  private path = '/fcms';
  private fcmService: FCMService;

  constructor() {
    this.fcmService = new FCMService();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post(this.path, this.fcmService.create);
    this.router.get(this.path, this.fcmService.findAll);
  }
}
