"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bancosController_1 = require("../controllers/bancosController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bancosController_1.bancosController.listBanks);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
