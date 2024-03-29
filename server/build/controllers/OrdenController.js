"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenController = void 0;
const database_1 = __importDefault(require("../database"));
class OrdenController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ordenes = yield database_1.default.query('SELECT * FROM ordenes');
            res.json(ordenes);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ordenes SET ?', [req.body]);
            res.json({ Text: "Orden guardada" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ordenes WHERE idOrden = ?', [id]);
            res.json({ Text: "Datos de la orden guardada " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ordenes SET idOrden = ?', [req.body, id]);
            res.json({ Text: "Datos de la orden actualizados " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const orden = yield database_1.default.query('SELECT * FROM ordenes WHERE idOrden = ?', [id]);
            if (orden.length > 0) {
                console.log(orden[0]);
                return res.json(orden[0]);
            }
            else {
                res.status(404).json({ Text: "Orden no encontrado" });
            }
        });
    }
}
exports.ordenController = new OrdenController();
exports.default = exports.ordenController;
