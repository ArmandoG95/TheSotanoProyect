"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PostreRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Postres"));
    }
}
const postreRoutes = new PostreRoutes();
exports.default = postreRoutes.router;
