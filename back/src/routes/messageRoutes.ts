import express from 'express';
import {
    createMessageController,
    getMessagesController,
} from '../controllers/messageControllers';

const router = express.Router();

router.post('/sendMessage', createMessageController);
router.get('/getMessages/:id', getMessagesController);

export default router;
