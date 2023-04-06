"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SnackController_1 = require("../controllers/SnackController");
class SnackRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', SnackController_1.snackController.index);
        this.router.post('/', SnackController_1.snackController.create);
        this.router.delete('/:id', SnackController_1.snackController.delete);
        this.router.put('/:id', SnackController_1.snackController.update);
        this.router.get('/:id', SnackController_1.snackController.detail);
    }
}
const snackRoutes = new SnackRoutes();
exports.default = snackRoutes.router;
