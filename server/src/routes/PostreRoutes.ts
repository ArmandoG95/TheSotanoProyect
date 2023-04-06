import { Router } from "express";
import { postreController } from "../controllers/PostreController";

class PostreRoutes
{
    public router: Router=Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        this.router.get('/', postreController.index);
        this.router.post('/', postreController.create);
        this.router.delete('/:id', postreController.delete);
        this.router.put('/:id', postreController.update);
        this.router.get('/:id', postreController.detail);
    }
}
const postreRoutes = new PostreRoutes();
export default postreRoutes.router;