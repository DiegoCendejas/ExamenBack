import { Request, Response } from 'express';
import keys from '../keys';
var mysql = require('promise-mysql');

//import pool from '../database';

class CuentasController {

    public list(req: Request, res: Response) {
        mysql.createConnection(keys.database).then(async (connection: any) => {
            const data = await connection.query('SELECT * FROM c_cuentas_bancarias');
            res.json({ status: 'success', data: data });
        });
    }

    public getOne(req: Request, res: Response) {
        const { id } = req.params;
        mysql.createConnection(keys.database).then(async (connection: any) => {
            const data = await connection.query('SELECT * FROM c_cuentas_bancarias WHERE ID=?', [id]);
            if (data.length > 0)
                res.json({ status: 'success', data: data });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        });
    }

    public create(req: Request, res: Response) {
        mysql.createConnection(keys.database).then(async (connection: any) => {
            await connection.query('INSERT INTO c_cuentas_bancarias SET ?', [req.body]);
            res.json({ status: 'success' });
        });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        mysql.createConnection(keys.database).then(async (connection: any) => {
            const data = await connection.query('DELETE FROM c_cuentas_bancarias WHERE ID=?', [id]);
            if (data.affectedRows > 0)
                res.json({ status: 'success' });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        });
    }

    public update(req: Request, res: Response) {
        const { id } = req.params;
        mysql.createConnection(keys.database).then(async (connection: any) => {
            const data = await connection.query('UPDATE c_cuentas_bancarias SET ? WHERE ID=?', [req.body, id]);
            if (data.affectedRows > 0)
                res.json({ status: 'success' });
            res.status(404).json({ status: 'error', message: 'La cuenta no existe' });
        });
    }

}

const cuentasController = new CuentasController();
export default cuentasController;