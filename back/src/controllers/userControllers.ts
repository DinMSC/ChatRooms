import { Request, Response } from 'express';
import { Params } from '../interfaces/authInterfaces';
import {
    createNewUser,
    login,
    getSingleUser,
    getAllUsers,
} from '../services/authService';

const registerController = async (req: Request, res: Response) => {
    try {
        const user = await createNewUser(req.body);
        res.status(201).json({ user: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const loginController = async (req: Request, res: Response) => {
    try {
        const user = await login(req.body);
        res.status(200).json({ user: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const getSingleUserController = async (
    req: Request<{}, {}, {}, Params>,
    res: Response
) => {
    try {
        const user = await getSingleUser(req.params);
        res.status(200).json({ user: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({ users: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

export {
    registerController,
    loginController,
    getSingleUserController,
    getAllUsersController,
};
