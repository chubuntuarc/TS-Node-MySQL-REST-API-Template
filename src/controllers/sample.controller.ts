import { Request, Response } from 'express';
import { connect } from '../database'; // Connection from MySQL
import { Sample } from '../interface/Sample.interface';

// Sample function that get values from MySQL.
export async function getSampleData(req: Request, res: Response): Promise<Response>{
    try {
        
        const conn = await connect();
        const data = await conn.query(`SELECT * FROM posts`);
        return res.json(data[0]);

    } catch (error) {
        console.log(`Error on controller[getSampleData] => ${error.message}`);
        return res.json({
            message: 'Failed'
        })
    }
}

// Sample function to create data.
export async function createData(req:Request, res:Response){
    try {
        
        const newData: Sample = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO posts SET ?', [newData]);
        return res.json({
            message: 'Complete'
        });

    } catch (error) {
        console.log(`Error on controller[createData] => ${error.message}`);
        return res.json({
            message: 'Failed'
        })
    }
}

// Function to get only one element from MySQL
export async function getDataById(req: Request, res:Response): Promise<Response>{
    try {
        
        const elementId = req.params.elementId; // Id from the url
        const conn = await connect();
        const result = await conn.query('SELECT * FROM posts WHERE id = ?', [elementId]); // Get the data from MySQL.
        return res.json(result[0]);

    } catch (error) {
        console.log(`Error on controller[getDataById] => ${error.message}`);
        return res.json({
            message: 'Failed'
        })
    }
}

// Function to delete only one element from MySQL
export async function deleteDataById(req: Request, res:Response) {
    try {
        
        const elementId = req.params.elementId; // Id from the url
        const conn = await connect();
        await conn.query('DELETE FROM posts WHERE id = ?', [elementId]); // Get the data from MySQL.
        return res.json({
            message: 'Data deleted'
        });

    } catch (error) {
        console.log(`Error on controller[deleteDataById] => ${error.message}`);
        return res.json({
            message: 'Failed'
        })
    }
}

// Function to update only one element from MySQL
export async function updateDataById(req: Request, res:Response) {
    try {
        
        const newData = req.body; // Data to replace
        const elementId = req.params.elementId; // Id from the url
        const conn = await connect();
        await conn.query('UPDATE posts SET ? WHERE id = ?', [newData, elementId]); // Get the data from MySQL.
        return res.json({
            message: 'Data updated'
        });

    } catch (error) {
        console.log(`Error on controller[updateDataById] => ${error.message}`);
        return res.json({
            message: 'Failed'
        })
    }
}