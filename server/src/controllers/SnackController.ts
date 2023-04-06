import { Request, Response } from "express";
import pool from "../database";

class SnackController
{
    public async index(req:Request, res:Response)
    {
        const snacks = await pool.query('SELECT * FROM snacks');
        res.json(snacks)
    }

    public async create(req:Request, res:Response): Promise <void>
    {
        await pool.query('INSERT INTO snacks SET ?', [req.body])
        res.json({Text: "Datos de snack guardados"});
    }

    public async delete(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM snacks WHERE idSnack = ?', [id])
        res.json({Text: "Datos de snack eliminados "+id});
    }

    public async update(req:Request, res:Response): Promise <void>
    {
        const {id} = req.params;
        await pool.query('UPDATE snacks SET idSnack = ?', [req.body, id])
        res.json({Text: "Snack actualizada "+id});
    }

    public async detail(req:Request, res:Response): Promise <any>
    {
        const {id} = req.params;
        const snack = await pool.query('SELECT * FROM snacks WHERE idSnack = ?', [id]);
        if(snack.length > 0)
        {
            console.log(snack[0]);
            return res.json(snack[0]);
        }
        else
        {
            res.status(404).json({Text: "Snack no encontrada"});
        }
    }
}
export const snackController = new SnackController();
export default snackController;