import { Request, Response } from "express";
import pool from "../database";

class PostreController
{
    public async index(req:Request, res:Response)
    {
        const postres = await pool.query('SELECT * FROM postres');
        res.json(postres)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO postres SET ?', [req.body])
        res.json({Text: "Datos de postre guardados"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM postres WHERE idPostre = ?', [id])
        res.json({Text: "Datos de postre eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE postres SET ? WHERE idPostre = ?', [req.body, id])
        res.json({Text: "Postre actualizada "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const postre = await pool.query('SELECT * FROM postres WHERE idPostre = ?', [id]);
        if(postre.length > 0)
        {
            console.log(postre[0]);
            return res.json(postre[0]);
        }
        else
        {
            res.status(404).json({Text: "Postre no encontrada"});
        }
    }
}
export const postreController = new PostreController();
export default postreController;