import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { UserData } from '../interfaces/authInterfaces';
import generateToken from '../helpers/generateToken';

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
            _id: user._id.toString(),
            token: generateToken(user._id.toString()),
            message: 'User Added!',
        };
    } catch (err) {
        return {
            error: err,
        };
    }
};

export default createNewUser;
