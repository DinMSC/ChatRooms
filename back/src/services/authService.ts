import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { UserData } from '../interfaces/authInterfaces';

const createNewUser = async (data: UserData) => {
    try {
        const hashPass = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            name: data.name,
            phone: data.phone,
            email: data.email,
            password: hashPass,
        });

        return {
            _id: user.id,
            token: generateToken(user._id),
            message: 'User Added !',
        };
    } catch (err) {
        return {
            error: err,
        };
    }
};
const generateToken = (_id: Types.ObjectId) => {
    throw new Error('Function not implemented.');
};

export default createNewUser;
