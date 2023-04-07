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
exports.clienteController = void 0;
const database_1 = __importDefault(require("../database"));
class ClienteController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query('SELECT * FROM clientes');
            res.json(clientes);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO clientes SET ?', [req.body]);
            res.json({ Text: "Cliente guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE matricula = ?', [id]);
            res.json({ Text: "Datos del Cliente eliminados " + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE clientes SET matricula = ?', [req.body, id]);
            res.json({ Text: "Datos de cliente actualizados " + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM clientes WHERE matricula = ?', [id]);
            if (cliente.length > 0) {
                console.log(cliente[0]);
                return res.json(cliente[0]);
            }
            else {
                res.status(404).json({ Text: "Cliente no encontrado" });
            }
        });
    }
}
exports.clienteController = new ClienteController();
exports.default = exports.clienteController;
