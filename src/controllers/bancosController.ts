import { Request, Response } from 'express';
import keys from '../keys';
var mysql = require('promise-mysql');

class BancosController {

    public listBanks(req: Request, res: Response) {
        mysql.createConnection(keys.database).then(async (connection: any) => {
            const data = await connection.query('SELECT * FROM c_banco');
            res.json({ status: 'success', data: data });
        });
    }

}

export const bancosController = new BancosController();