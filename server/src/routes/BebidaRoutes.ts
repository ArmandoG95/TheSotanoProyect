import { Router } from "express";
import bebidaController from "../controllers/BebidaController";

class BebidaRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', bebidaController.index);
        this.router.post('/', bebidaController.create);
        this.router.delete('/:id', bebidaController.delete);
        this.router.put('/:id', bebidaController.update);
        this.router.get('/:id', bebidaController.detail);
    }
}
const bebidaRoutes = new BebidaRoutes();
export default bebidaRoutes.router;