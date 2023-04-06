"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BebidaController_1 = __importDefault(require("../controllers/BebidaController"));
class BebidaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', BebidaController_1.default.index);
        this.router.post('/', BebidaController_1.default.create);
        this.router.delete('/:id', BebidaController_1.default.delete);
        this.router.put('/:id', BebidaController_1.default.update);
        this.router.get('/:id', BebidaController_1.default.detail);
    }
}
const bebidaRoutes = new BebidaRoutes();
exports.default = bebidaRoutes.router;
