import { Router } from "express";
import clienteController from "../controllers/ClienteController";

class ClienteRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', clienteController.index);
        this.router.post('/', clienteController.create);
        this.router.delete('/:id', clienteController.delete);
        this.router.put('/:id', clienteController.update);
        this.router.get('/:id', clienteController.detail);
    }
}
const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;