import express from 'express';
import { createMessage } from '../services/messageService';
import { getMessagesController } from '../controllers/messageControllers';

const router = express.Router();

router.post('/sendMessage', createMessage);
router.get('/getMessages/:id', getMessagesController);

export default router;
