import { Request, Response } from "express";
import pool from "../database";

class ComidaController
{
    public async index(req:Request, res:Response)
    {
        const comidas = await pool.query('SELECT * FROM comidas');
        res.json(comidas)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO comidas SET ?', [req.body])
        res.json({Text: "Datos de comida guardados"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM comidas WHERE idComida = ?', [id])
        res.json({Text: "Datos de comida eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE comidas SET idComida = ?', [req.body, id])
        res.json({Text: "Comida actualizada "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const comida = await pool.query('SELECT * FROM comidas WHERE idComida = ?', [id]);
        if(comida.length > 0)
        {
            console.log(comida[0]);
            return res.json(comida[0]);
        }
        else
        {
            res.status(404).json({Text: "Comida no encontrada"});
        }
    }
}
export const comidaController = new ComidaController();
export default comidaController;