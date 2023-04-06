"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send({ text: 'API está en /api/Comidas' });
        res.send({ text: 'API está en /api/Bebidas' });
        res.send({ text: 'API está en /api/Postres' });
        res.send({ text: 'API está en /api/Snacks' });
    }
}
exports.indexController = new IndexController();
