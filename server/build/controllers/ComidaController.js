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
exports.comidaController = void 0;
const database_1 = __importDefault(require("../database"));
class ComidaController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comidas = yield database_1.default.query('SELECT * FROM comidas');
            res.json(comidas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO comidas SET ?', [req.body]);
            res.json({ Text: "Datos de comida guardados" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM comidas WHERE idComida = ?', [id]);
            res.json({ Text: "Datos de comida eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE comidas SET idComida = ?', [req.body, id]);
            res.json({ Text: "Comida actualizada " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const comida = yield database_1.default.query('SELECT * FROM comidas WHERE idComida = ?', [id]);
            if (comida.length > 0) {
                console.log(comida[0]);
                return res.json(comida[0]);
            }
            else {
                res.status(404).json({ Text: "Comida no encontrada" });
            }
        });
    }
}
exports.comidaController = new ComidaController();
exports.default = exports.comidaController;
