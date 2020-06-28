import QuestionService from '../services/question-service';
import { Router } from 'express';

export default class QuestionController {
  private readonly router = Router();
  private path = '/questions';
  private questionService: QuestionService;

  constructor() {
    this.questionService = new QuestionService();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post(this.path, this.questionService.create);
    this.router.get(this.path, this.questionService.findAll);
    this.router.get(`${this.path}/:appId`, this.questionService.findByAppID);
    this.router.put(this.path, this.questionService.update);
  }
}
