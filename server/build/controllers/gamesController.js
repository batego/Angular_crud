"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        const { id } = req.params;
        database_1.default.query('SELECT * FROM game where id = ?', [id]).then((items) => {
            res.json(items[0]);
        });
        //res.json('Games:  '+ req.params.id );
    }
    create(req, res) {
        database_1.default.query('INSERT INTO game set ?', [req.body]).then((rows) => {
            console.log(rows);
        });
        console.log(req.body);
        res.json({ message: 'Game Saved' });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('update game set ? where id = ?', [req.body, id]);
            res.json({ message: 'The game was save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from game where id = ?', [id]);
            res.json({ text: 'the Game was deleted: ' + req.params.id });
        });
    }
}
const gamesController = new GamesxController();
exports.default = gamesController;
