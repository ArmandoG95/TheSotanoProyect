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
exports.pagoController = void 0;
const database_1 = __importDefault(require("../database"));
class PagoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pagos = yield database_1.default.query('SELECT * FROM pagos');
            res.json(pagos);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pagos SET ?', [req.body]);
            res.json({ Text: "Pago guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pagos WHERE idPago = ?', [id]);
            res.json({ Text: "Datos del pago eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pagos SET idPago = ?', [req.body, id]);
            res.json({ Text: "Datos del pago actualizados " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pago = yield database_1.default.query('SELECT * FROM pagos WHERE idPago = ?', [id]);
            if (pago.length > 0) {
                console.log(pago[0]);
                return res.json(pago[0]);
            }
            else {
                res.status(404).json({ Text: "Pago no encontrado" });
            }
        });
    }
}
exports.pagoController = new PagoController();
exports.default = exports.pagoController;
