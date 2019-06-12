"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentasController_1 = __importDefault(require("../controllers/cuentasController"));
class CuentasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cuentasController_1.default.list);
        this.router.get('/:id', cuentasController_1.default.getOne);
        this.router.post('/', cuentasController_1.default.create);
        this.router.put('/:id', cuentasController_1.default.update);
        this.router.delete('/:id', cuentasController_1.default.delete);
    }
}
const cuentasRoutes = new CuentasRoutes();
exports.default = cuentasRoutes.router;
