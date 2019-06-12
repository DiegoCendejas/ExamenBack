import { Router } from 'express';
import { bancosController } from '../controllers/bancosController';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', bancosController.listBanks);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;