import TaskService from '../services/task-service';
import { Router } from 'express';

export default class TaskController {
  private readonly router = Router();
  private path = '/tasks';
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.taskService.findAll);
    this.router.post(`${this.path}`, this.taskService.create);
  }
}
