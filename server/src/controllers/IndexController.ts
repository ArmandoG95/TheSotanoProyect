import { Request, Response } from "express";

class IndexController
{
    public index(req:Request, res:Response)
    {
        res.send({text: 'API está en /api/Comidas'})
        res.send({text: 'API está en /api/Bebidas'})
        res.send({text: 'API está en /api/Postres'})
        res.send({text: 'API está en /api/Snacks'})
    }
}
export const indexController = new IndexController();