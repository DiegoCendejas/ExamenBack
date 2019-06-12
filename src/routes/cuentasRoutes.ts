import { Router } from 'express';
import cuentasController from '../controllers/cuentasController';

class CuentasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cuentasController.list);
        this.router.get('/:id', cuentasController.getOne);
        this.router.post('/',cuentasController.create);
        this.router.put('/:id',cuentasController.update);
        this.router.delete('/:id',cuentasController.delete);
    }
}

const cuentasRoutes = new CuentasRoutes();
export default cuentasRoutes.router;