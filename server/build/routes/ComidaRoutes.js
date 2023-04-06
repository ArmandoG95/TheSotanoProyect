"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ComidaController_1 = require("../controllers/ComidaController");
class ComidaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ComidaController_1.comidaController.index);
        this.router.post('/', ComidaController_1.comidaController.create);
        this.router.delete('/:id', ComidaController_1.comidaController.delete);
        this.router.put('/:id', ComidaController_1.comidaController.update);
        this.router.get('/:id', ComidaController_1.comidaController.detail);
    }
}
const comidaRoutes = new ComidaRoutes();
exports.default = comidaRoutes.router;
