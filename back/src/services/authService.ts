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

const getSingleUser = async (params: Params) => {
    try {
        const user = User.findById(params.id);
        if (user) {
            return user;
        }
    } catch (err) {
        return err;
    }
};
const getAllUsers = async () => {
    try {
        const users = await User.find();

        return users;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (params: Params, data: UserData) => {
    try {
        const user = await User.findByIdAndUpdate(params.id, data, {
            new: true,
        });
        console.log(user);

        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const deleteUser = async (params: Params) => {
    try {
        await User.findByIdAndDelete(params.id);
        return { message: 'deleted User!' };
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export {
    createNewUser,
    login,
    getSingleUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
