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
exports.postreController = void 0;
const database_1 = __importDefault(require("../database"));
class PostreController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postres = yield database_1.default.query('SELECT * FROM postres');
            res.json(postres);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO postres SET ?', [req.body]);
            res.json({ Text: "Datos de postre guardados" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM postres WHERE idPostre = ?', [id]);
            res.json({ Text: "Datos de postre eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE postres SET idPostre = ?', [req.body, id]);
            res.json({ Text: "Postre actualizada " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const postre = yield database_1.default.query('SELECT * FROM postres WHERE idPostre = ?', [id]);
            if (postre.length > 0) {
                console.log(postre[0]);
                return res.json(postre[0]);
            }
            else {
                res.status(404).json({ Text: "Postre no encontrada" });
            }
        });
    }
}
exports.postreController = new PostreController();
exports.default = exports.postreController;
