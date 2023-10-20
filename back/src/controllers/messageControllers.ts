import { Request, Response } from 'express';
import { createMessage, getMessages } from '../services/messageService';

const createMessageController = async (req: Request, res: Response) => {
    try {
        const message = await createMessage(req.body);
        res.status(200).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const getMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await getMessages(req.params);
        res.status(200).json({ messages: messages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};
export { createMessageController, getMessagesController };
