import { Request, Response } from "express";
import pool from "../database";

class BebidaController
{
    public async index(req:Request, res:Response)
    {
        const bebidas = await pool.query('SELECT * FROM bebidas');
        res.json(bebidas)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO bebidas SET ?', [req.body])
        res.json({Text: "Datos de bebida guardados"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM bebidas WHERE idBebida = ?', [id])
        res.json({Text: "Datos de bebida eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE bebidas SET idBebida = ?', [req.body, id])
        res.json({Text: "Bebida actualizada "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const bebida = await pool.query('SELECT * FROM bebidas WHERE idBebida = ?', [id]);
        if(bebida.length > 0)
        {
            console.log(bebida[0]);
            return res.json(bebida[0]);
        }
        else
        {
            res.status(404).json({Text: "Bebida no encontrada"});
        }
    }
}
export const bebidaController = new BebidaController();
export default bebidaController;