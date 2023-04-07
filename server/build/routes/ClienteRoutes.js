"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClienteController_1 = __importDefault(require("../controllers/ClienteController"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ClienteController_1.default.index);
        this.router.post('/', ClienteController_1.default.create);
        this.router.delete('/:id', ClienteController_1.default.delete);
        this.router.put('/:id', ClienteController_1.default.update);
        this.router.get('/:id', ClienteController_1.default.detail);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
