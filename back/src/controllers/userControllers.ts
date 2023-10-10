import createNewUser from '../services/authService';

const registerController = async (req: Request, res: Response) => {
    try {
        const user = await createNewUser(req.body);
        res.status(201).json({ user: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};
