import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { Params, UserData } from '../interfaces/authInterfaces';
import generateToken from '../helpers/generateToken';

const createNewUser = async (data: UserData) => {
    try {
        const hashPass = await bcrypt.hash(data.password, 10);

        if (await User.findOne({ email: data.email })) {
            return 'User Already Exists';
        }

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

// Create custom responses and errors correctly
const login = async (data: UserData) => {
    try {
        const username = data.username;
        const password = data.password;

        const user = await User.findOne({
            $or: [{ email: username }, { phone: username }],
        });

        if (user) {
            const match = await new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            if (match) {
                return {
                    _id: user._id.toString(),
                    token: generateToken(user._id.toString()),
                    message: 'User Logged In',
                };
            } else {
                return 'Incorrect Password or Name';
            }
        } else {
            return 'User Not Found';
        }
    } catch (err) {
        return {
            error: err,
        };
    }
};

const getSingleUser = async (data: Params) => {
    const user = await User.findById(data);
    if (user) {
        console.log(user._id, 'AAA');
    }
};

export { createNewUser, login, getSingleUser };
