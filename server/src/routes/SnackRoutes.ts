import { Router } from "express";
import { snackController } from "../controllers/SnackController";

class SnackRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', snackController.index);
        this.router.post('/', snackController.create);
        this.router.delete('/:id', snackController.delete);
        this.router.put('/:id', snackController.update);
        this.router.get('/:id', snackController.detail);
    }
}
const snackRoutes = new SnackRoutes();
export default snackRoutes.router;