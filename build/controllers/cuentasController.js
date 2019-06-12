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
//import pool from '../database';
class CuentasController {
    list(req, res) {
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            const data = yield connection.query('SELECT * FROM c_cuentas_bancarias');
            res.json({ status: 'success', data: data });
        }));
    }
    getOne(req, res) {
        const { id } = req.params;
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            const data = yield connection.query('SELECT * FROM c_cuentas_bancarias WHERE ID=?', [id]);
            if (data.length > 0)
                res.json({ status: 'success', data: data });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        }));
    }
    create(req, res) {
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            yield connection.query('INSERT INTO c_cuentas_bancarias SET ?', [req.body]);
            res.json({ status: 'success' });
        }));
    }
    delete(req, res) {
        const { id } = req.params;
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            const data = yield connection.query('DELETE FROM c_cuentas_bancarias WHERE ID=?', [id]);
            if (data.affectedRows > 0)
                res.json({ status: 'success' });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        }));
    }
    update(req, res) {
        const { id } = req.params;
        mysql.createConnection(keys_1.default.database).then((connection) => __awaiter(this, void 0, void 0, function* () {
            const data = yield connection.query('UPDATE c_cuentas_bancarias SET ? WHERE ID=?', [req.body, id]);
            if (data.affectedRows > 0)
                res.json({ status: 'success' });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        }));
    }
}
const cuentasController = new CuentasController();
exports.default = cuentasController;
