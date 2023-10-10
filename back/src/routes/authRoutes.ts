import express from 'express';

import {
    getAllUsersController,
    getSingleUserController,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userContorllers';

const router = express.Router();

router.post('/createUser', createUser);

export default router;
