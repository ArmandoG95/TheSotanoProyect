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
exports.bebidaController = void 0;
const database_1 = __importDefault(require("../database"));
class BebidaController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bebidas = yield database_1.default.query('SELECT * FROM bebidas');
            res.json(bebidas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO bebidas SET ?', [req.body]);
            res.json({ Text: "Datos de bebida guardados" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM bebidas WHERE idBebida = ?', [id]);
            res.json({ Text: "Datos de bebida eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE bebidas SET ? WHERE idBebida = ?', [req.body, id]);
            res.json({ Text: "Bebida actualizada " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const bebida = yield database_1.default.query('SELECT * FROM bebidas WHERE idBebida = ?', [id]);
            if (bebida.length > 0) {
                console.log(bebida[0]);
                return res.json(bebida[0]);
            }
            else {
                res.status(404).json({ Text: "Bebida no encontrada" });
            }
        });
    }
}
exports.bebidaController = new BebidaController();
exports.default = exports.bebidaController;
