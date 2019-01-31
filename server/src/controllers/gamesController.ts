import  { Request, Response } from 'express';
import poll from '../database';

class GamesxController{

    public index(req:Request, res: Response){
        poll.query('DESCRIBE NG_GAMES_DB.GAME');
        res.json('Games');
    }
}

const gamesController = new GamesxController();
export default gamesController;