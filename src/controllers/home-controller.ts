import HomeService from './../services/home-service';
import { Router } from 'express';

export default class HomeController {
  private readonly router = Router();
  private path = '/';
  private homeService: HomeService;

  constructor() {
    this.homeService = new HomeService();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.homeService.helloWorld);
  }
}
