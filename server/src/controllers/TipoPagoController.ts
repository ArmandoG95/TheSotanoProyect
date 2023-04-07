import { Request, Response } from "express";
import pool from "../database";

class TipoPagoController
{
    public async index(req:Request, res:Response)
    {
        const tipoPagos = await pool.query('SELECT * FROM tipopagos');
        res.json(tipoPagos)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO tipopagos SET ?', [req.body])
        res.json({Text: "Tipo de pago guardado"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM tipopagos WHERE idTipoPago  = ?', [id])
        res.json({Text: "Datos del tipo de pago eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE tipopagos SET idTipoPago = ?', [req.body, id])
        res.json({Text: "Datos del tipo de pago actualizados "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const tipoPago = await pool.query('SELECT * FROM tipopagos WHERE idTipoPago = ?', [id]);
        if(tipoPago.length > 0)
        {
            console.log(tipoPago[0]);
            return res.json(tipoPago[0]);
        }
        else
        {
            res.status(404).json({Text: "Tipo de pago no encontrado"});
        }
    }
}
export const tipoPagoController = new TipoPagoController();
export default tipoPagoController;