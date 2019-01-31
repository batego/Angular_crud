"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesxController {
    list(req, res) {
        database_1.default.query('SELECT * FROM ng_games_db.game;').then((rows) => {
            res.json(rows);
        });
        //res.json(games);
    }
    getOne(req, res) {
        //poll.query('DESCRIBE NG_GAMES_DB.GAME');
        res.json('Games:  ' + req.params.id);
    }
    create(req, res) {
        database_1.default.query('INSERT INTO game set ?', [req.body]).then((rows) => {
            console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Game Saved' });
    }
    update(req, res) {
        res.json({ text: 'Updating a Game: ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Deleting a Game: ' + req.params.id });
    }
}
const gamesController = new GamesxController();
exports.default = gamesController;
