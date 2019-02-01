import { Request, Response } from 'express';
import poll from '../database';



class GamesxController {

    public list(req: Request, res: Response) {
        
        poll.query('SELECT * FROM ng_games_db.game;').then((rows) =>{
            res.json(rows);
        });
        //res.json(games);
    }

    public getOne(req: Request, res: Response) {
        const { id } = req.params;
        poll.query('SELECT * FROM game where id = ?', [id]).then((items) => {
            res.json(items);
        });
        //res.json('Games:  '+ req.params.id );
    }

    public  create(req: Request, res: Response) {
        poll.query('INSERT INTO game set ?',[req.body]).then((rows) =>{
            console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Game Saved' });
    }

    public update(req: Request, res: Response) {
        res.json({ text: 'Updating a Game: ' + req.params.id });
    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Deleting a Game: '+ req.params.id });
    }
}

const gamesController = new GamesxController();
export default gamesController;