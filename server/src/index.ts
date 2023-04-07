import express, { Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/IndexRoutes';
import bebidaRoutes from './routes/BebidaRoutes';
import comidaRoutes from './routes/ComidaRoutes';
import postreRoutes from './routes/PostreRoutes';
import snackRoutes from './routes/SnackRoutes';
import clienteRoutes from './routes/ClienteRoutes';
import ordenRoutes from './routes/OrdenRoutes';
import tipoPagoRoutes from './routes/TipoPagoRoutes';
import pagoRoutes from './routes/PagoRoutes';

class Server
{
    public app: Application;

    constructor()
    {
        this.app=express();
        this.config();
        this.routes();
    }

    config():void
    {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void
    {
        this.app.use('/', indexRoutes)
        this.app.use('/api/Bebidas', bebidaRoutes)
        this.app.use('/api/Comidas', comidaRoutes)
        this.app.use('/api/Postres', postreRoutes)
        this.app.use('/api/Snacks', snackRoutes)
        this.app.use('/api/Clientes', clienteRoutes)
        this.app.use('/api/Ordenes', ordenRoutes)
        this.app.use('/api/TipoPagos', tipoPagoRoutes)
        this.app.use('/api/Pagos', pagoRoutes)
    }

    star():void
    {
        this.app.listen(this.app.get('port'), ()=>{console.log("Servidor en puerto", this.app.get('port'))});
    }
}
const server=new Server();
server.star();