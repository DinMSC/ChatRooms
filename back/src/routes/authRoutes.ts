import express from 'express';
import {
    loginController,
    registerController,
    getSingleUserController,
} from '../controllers/userControllers';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/getUser/:id', getSingleUserController);
export default router;
