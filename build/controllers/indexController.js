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
const keys_1 = __importDefault(require("../keys"));
var mysql = require('promise-mysql');
class IndexController {
    index(req, res) {
        res.send('Hola');
    }
    listBanks(req, res) {
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            const data = yield connection.query('SELECT * FROM c_banco');
            res.json({ status: 'success', data: data });
        }));
    }
}
exports.indexController = new IndexController();
