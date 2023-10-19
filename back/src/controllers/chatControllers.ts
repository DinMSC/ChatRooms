import { Request, Response } from 'express';
import { Id, Ids } from '../interfaces/interfaces';
import { createChat, findChat, findUsersChats } from '../services/chatService';

const createChatController = async (req: Request, res: Response) => {
    const { id1, id2 } = req.body;
    try {
        const chat = await createChat(id1, id2);
        res.status(200).json({ chat: chat });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const findUsersChatsController = async (
    req: Request<{}, {}, {}, Id>,
    res: Response
) => {
    try {
        const chats = await findUsersChats(req.params);
        res.status(200).json({ chats: chats });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

const findChatController = async (
    req: Request<{}, {}, {}, Ids>,
    res: Response
) => {
    try {
        const chat = await findChat(req.params);
        res.status(200).json({ chat: chat });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
};

export { createChatController, findUsersChatsController, findChatController };
