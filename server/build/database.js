"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('Conectado a la base de datos');
});
exports.default = pool;
