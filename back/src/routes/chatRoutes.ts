import express from 'express';
import {
    createChatController,
    findChatController,
    findUsersChatsController,
} from '../controllers/chatController';

const router = express.Router();

router.post('/createChat', createChatController);
router.get('/getUsersChats/:id', findUsersChatsController);
router.get('/createChat/:id1/:id2', findChatController);

export default router;
