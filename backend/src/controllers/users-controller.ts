import { Request, Response } from 'express';
import { RouterController } from '../utils/types';

async function testConnection(
    _req: Request,
    res: Response
): Promise<any> {
    return res.status(200).json({ message: 'connection up' });
}

export default {
    testConnection
} satisfies RouterController;
