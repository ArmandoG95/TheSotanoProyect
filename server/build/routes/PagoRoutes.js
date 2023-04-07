"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PagoController_1 = __importDefault(require("../controllers/PagoController"));
class PagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', PagoController_1.default.index);
        this.router.post('/', PagoController_1.default.create);
        this.router.delete('/:id', PagoController_1.default.delete);
        this.router.put('/:id', PagoController_1.default.update);
        this.router.get('/:id', PagoController_1.default.detail);
    }
}
const pagoRoutes = new PagoRoutes();
exports.default = pagoRoutes.router;
