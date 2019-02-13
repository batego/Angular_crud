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
            res.json(items[0]);
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

    public async update(req: Request, res: Response): Promise<void> {        
        const { id } = req.params;
        await poll.query('update game set ? where id = ?',[req.body, id]);
        res.json({message: 'The game was save'});
    }

    public async delete(req: Request, res: Response): Promise<void>  {
        const { id } = req.params;
        await poll.query('delete from game where id = ?',[id])
        res.json({ text: 'the Game was deleted: '+ req.params.id });
    }
}

const gamesController = new GamesxController();
export default gamesController;