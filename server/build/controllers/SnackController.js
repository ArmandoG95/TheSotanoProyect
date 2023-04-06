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
exports.snackController = void 0;
const database_1 = __importDefault(require("../database"));
class SnackController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snacks = yield database_1.default.query('SELECT * FROM snacks');
            res.json(snacks);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO snacks SET ?', [req.body]);
            res.json({ Text: "Datos de snack guardados" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM snacks WHERE idSnack = ?', [id]);
            res.json({ Text: "Datos de snack eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE snacks SET idSnack = ?', [req.body, id]);
            res.json({ Text: "Snack actualizada " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const snack = yield database_1.default.query('SELECT * FROM snacks WHERE idSnack = ?', [id]);
            if (snack.length > 0) {
                console.log(snack[0]);
                return res.json(snack[0]);
            }
            else {
                res.status(404).json({ Text: "Snack no encontrada" });
            }
        });
    }
}
exports.snackController = new SnackController();
exports.default = exports.snackController;
