import { Router } from "express";
import tipoPagoController from "../controllers/TipoPagoController";

class TipoPagoRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', tipoPagoController.index);
        this.router.post('/', tipoPagoController.create);
        this.router.delete('/:id', tipoPagoController.delete);
        this.router.put('/:id', tipoPagoController.update);
        this.router.get('/:id', tipoPagoController.detail);
    }
}
const tipoPagoRoutes = new TipoPagoRoutes();
export default tipoPagoRoutes.router;