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
exports.tipoPagoController = void 0;
const database_1 = __importDefault(require("../database"));
class TipoPagoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoPagos = yield database_1.default.query('SELECT * FROM tipopagos');
            res.json(tipoPagos);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tipopagos SET ?', [req.body]);
            res.json({ Text: "Tipo de pago guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tipopagos WHERE idTipoPago  = ?', [id]);
            res.json({ Text: "Datos del tipo de pago eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tipopagos SET idTipoPago = ?', [req.body, id]);
            res.json({ Text: "Datos del tipo de pago actualizados " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tipoPago = yield database_1.default.query('SELECT * FROM tipopagos WHERE idTipoPago = ?', [id]);
            if (tipoPago.length > 0) {
                console.log(tipoPago[0]);
                return res.json(tipoPago[0]);
            }
            else {
                res.status(404).json({ Text: "Tipo de pago no encontrado" });
            }
        });
    }
}
exports.tipoPagoController = new TipoPagoController();
exports.default = exports.tipoPagoController;
