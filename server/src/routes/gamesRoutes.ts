import { Router } from 'express';
import GamesxController from '../controllers/gamesController';
import gamesController from '../controllers/gamesController';
class GamesRouter {

    public router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

const gamesRoutes = new GamesRouter();
export default gamesRoutes.router; 