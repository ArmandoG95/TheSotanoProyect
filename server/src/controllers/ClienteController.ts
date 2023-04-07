import { Request, Response } from "express";
import pool from "../database";

class ClienteController
{
    public async index(req:Request, res:Response)
    {
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO clientes SET ?', [req.body])
        res.json({Text: "Cliente guardado"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM clientes WHERE matricula = ?', [id])
        res.json({Text: "Datos del Cliente eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE clientes SET matricula = ?', [req.body, id])
        res.json({Text: "Datos de cliente actualizados "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const cliente = await pool.query('SELECT * FROM clientes WHERE matricula = ?', [id]);
        if(cliente.length > 0)
        {
            console.log(cliente[0]);
            return res.json(cliente[0]);
        }
        else
        {
            res.status(404).json({Text: "Cliente no encontrado"});
        }
    }
}
export const clienteController = new ClienteController();
export default clienteController;