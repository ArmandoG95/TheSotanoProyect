import { Request, Response } from "express";
import pool from "../database";

class PagoController
{
    public async index(req:Request, res:Response)
    {
        const pagos = await pool.query('SELECT * FROM pagos');
        res.json(pagos)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO pagos SET ?', [req.body])
        res.json({Text: "Pago guardado"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM pagos WHERE idPago = ?', [id])
        res.json({Text: "Datos del pago eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE pagos SET idPago = ?', [req.body, id])
        res.json({Text: "Datos del pago actualizados "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const pago = await pool.query('SELECT * FROM pagos WHERE idPago = ?', [id]);
        if(pago.length > 0)
        {
            console.log(pago[0]);
            return res.json(pago[0]);
        }
        else
        {
            res.status(404).json({Text: "Pago no encontrado"});
        }
    }
}
export const pagoController = new PagoController();
export default pagoController;