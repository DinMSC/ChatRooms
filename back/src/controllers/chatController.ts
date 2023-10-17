import { Request, Response } from 'express';
import { UserId, UserIds } from '../interfaces/authInterfaces';
import { createChat, findChat, findUsersChats } from '../services/chatService';

const createChatController = async (req: Request, res: Response) => {
    const { id1, id2 } = req.body;
    try {
        const chat = await createChat(id1, id2);
        res.status(200).json({ chat: chat });
    } catch (err) {
        return {
            error: err,
        };
    }
};

const findUsersChatsController = async (
    req: Request<{}, {}, {}, UserId>,
    res: Response
) => {
    try {
        const chats = await findUsersChats(req.params);
        res.status(200).json({ chats: chats });
    } catch (err) {
        return {
            error: err,
        };
    }
};

const findChatController = async (
    req: Request<{}, {}, {}, UserIds>,
    res: Response
) => {
    try {
        const chat = await findChat(req.params);
        res.status(200).json({ chat: chat });
    } catch (err) {
        return {
            error: err,
        };
    }
};

export { createChatController, findUsersChatsController, findChatController };
