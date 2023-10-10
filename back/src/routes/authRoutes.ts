import express from 'express';
import registerController from '../controllers/userControllers';

const router = express.Router();

router.post('/createUser', registerController);

export default router;
