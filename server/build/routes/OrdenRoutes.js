"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrdenController_1 = __importDefault(require("../controllers/OrdenController"));
class OrdenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', OrdenController_1.default.index);
        this.router.post('/', OrdenController_1.default.create);
        this.router.delete('/:id', OrdenController_1.default.delete);
        this.router.put('/:id', OrdenController_1.default.update);
        this.router.get('/:id', OrdenController_1.default.detail);
    }
}
const ordenRoutes = new OrdenRoutes();
exports.default = ordenRoutes.router;
