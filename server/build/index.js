"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const BebidaRoutes_1 = __importDefault(require("./routes/BebidaRoutes"));
const ComidaRoutes_1 = __importDefault(require("./routes/ComidaRoutes"));
const PostreRoutes_1 = __importDefault(require("./routes/PostreRoutes"));
const SnackRoutes_1 = __importDefault(require("./routes/SnackRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/Bebidas', BebidaRoutes_1.default);
        this.app.use('/api/Comidas', ComidaRoutes_1.default);
        this.app.use('/api/Postres', PostreRoutes_1.default);
        this.app.use('/api/Snacks', SnackRoutes_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => { console.log("Servidor en puerto", this.app.get('port')); });
    }
}
const server = new Server();
server.star();
