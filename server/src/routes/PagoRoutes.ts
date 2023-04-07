import { Router } from "express";
import pagoController from "../controllers/PagoController";

class PagoRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', pagoController.index);
        this.router.post('/', pagoController.create);
        this.router.delete('/:id', pagoController.delete);
        this.router.put('/:id', pagoController.update);
        this.router.get('/:id', pagoController.detail);
    }
}
const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;