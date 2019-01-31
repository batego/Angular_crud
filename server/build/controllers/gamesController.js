"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesxController {
    index(req, res) {
        database_1.default.query('DESCRIBE NG_GAMES_DB.GAME');
        res.json('Games');
    }
}
const gamesController = new GamesxController();
exports.default = gamesController;
