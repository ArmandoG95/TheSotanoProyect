import { Router } from "express";
import ordenController from "../controllers/OrdenController";

class OrdenRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', ordenController.index);
        this.router.post('/', ordenController.create);
        this.router.delete('/:id', ordenController.delete);
        this.router.put('/:id', ordenController.update);
        this.router.get('/:id', ordenController.detail);
    }
}
const ordenRoutes = new OrdenRoutes();
export default ordenRoutes.router;