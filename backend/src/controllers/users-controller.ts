import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { RouterController } from '../utils/types';
import client from '../db/pool-client';
import db from '../db/user-queries';

async function GETUsers(_req: Request, res: Response): Promise<any> {
    try {
        const users = await client.query(db.GET_ALL);
        return res.status(200).json(users.rows);
    } catch (err) {
        console.log(err);
    }
}

async function GETUserID(req: Request, res: Response): Promise<any> {
    try {
        const user = await client.query(db.GET_BY_ID, [req.params.id]);
        if (user.rows.length < 1)
            return res.status(400).json({ error: 'user not found' });
        return res.status(200).json(user.rows.shift());
    } catch (err) {
        console.log(err);
    }
}

async function POSTUser(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'missing username/password' });

    const userExists = await client.query(db.GET_BY_USER, [username]);
    if (userExists.rows.length > 0)
        return res.status(400).json({ error: 'user already exists' });

    const passwordHash = await bcrypt.hash(password, 10);

    await client.query(db.INSERT_USER, [username, passwordHash]);

    const newUser = await client.query(db.GET_BY_USER, [username]);
    return res.status(201).json(newUser.rows.shift());
}

export default {
    GETUsers,
    GETUserID,
    POSTUser
} satisfies RouterController;
