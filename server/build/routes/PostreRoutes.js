"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostreController_1 = require("../controllers/PostreController");
class PostreRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', PostreController_1.postreController.index);
        this.router.post('/', PostreController_1.postreController.create);
        this.router.delete('/:id', PostreController_1.postreController.delete);
        this.router.put('/:id', PostreController_1.postreController.update);
        this.router.get('/:id', PostreController_1.postreController.detail);
    }
}
const postreRoutes = new PostreRoutes();
exports.default = postreRoutes.router;
