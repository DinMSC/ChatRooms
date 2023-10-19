import express from 'express';
import {
    createChatController,
    findChatController,
    findUsersChatsController,
} from '../controllers/chatControllers';

const router = express.Router();

router.post('/createChat', createChatController);
router.get('/getUsersChats/:id', findUsersChatsController);
router.get('/findChat/:id1/:id2', findChatController);

export default router;
