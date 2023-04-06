import { Router } from "express";
import { comidaController } from "../controllers/ComidaController";

class ComidaRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', comidaController.index);
        this.router.post('/', comidaController.create);
        this.router.delete('/:id', comidaController.delete);
        this.router.put('/:id', comidaController.update);
        this.router.get('/:id', comidaController.detail);
    }
}
const comidaRoutes = new ComidaRoutes();
export default comidaRoutes.router;