import express from 'express';
import {
    loginController,
    registerController,
    getSingleUserController,
    getAllUsersController,
    updateUserController,
    deleteUserController,
} from '../controllers/userControllers';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/getUser/:id', getSingleUserController);
router.get('/getUsers', getAllUsersController);
router.post('/updateUser/:id', updateUserController);
router.post('/deleteUser/:id', deleteUserController);
export default router;
