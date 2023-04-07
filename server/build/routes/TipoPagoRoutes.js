"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoPagoController_1 = __importDefault(require("../controllers/TipoPagoController"));
class TipoPagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', TipoPagoController_1.default.index);
        this.router.post('/', TipoPagoController_1.default.create);
        this.router.delete('/:id', TipoPagoController_1.default.delete);
        this.router.put('/:id', TipoPagoController_1.default.update);
        this.router.get('/:id', TipoPagoController_1.default.detail);
    }
}
const tipoPagoRoutes = new TipoPagoRoutes();
exports.default = tipoPagoRoutes.router;
