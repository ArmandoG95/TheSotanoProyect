import { Request, Response } from "express";
import pool from "../database";

class OrdenController
{
    public async index(req:Request, res:Response)
    {
        const ordenes = await pool.query('SELECT * FROM ordenes');
        res.json(ordenes)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO ordenes SET ?', [req.body])
        res.json({Text: "Orden guardada"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM ordenes WHERE idOrden = ?', [id])
        res.json({Text: "Datos de la orden guardada "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE ordenes SET idOrden = ?', [req.body, id])
        res.json({Text: "Datos de la orden actualizados "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const orden = await pool.query('SELECT * FROM ordenes WHERE idOrden = ?', [id]);
        if(orden.length > 0)
        {
            console.log(orden[0]);
            return res.json(orden[0]);
        }
        else
        {
            res.status(404).json({Text: "Orden no encontrado"});
        }
    }
}
export const ordenController = new OrdenController();
export default ordenController;