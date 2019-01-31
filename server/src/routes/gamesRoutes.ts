import { Router } from 'express';
import GamesxController from '../controllers/gamesController';
import gamesController from '../controllers/gamesController';
class GamesRouter {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', gamesController.index);
    }
}

const gamesRoutes = new GamesRouter();
export default gamesRoutes.router; 