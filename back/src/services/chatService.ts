import { UserId, UserIds } from '../interfaces/authInterfaces';
import Chat from '../models/chatsModel';
import User from '../models/userModel';

const createChat = async (id1: UserId, id2: UserId) => {
    try {
        const checkChat = await Chat.findOne({
            members: { $all: [id1, id2] },
        });
        if (checkChat) {
            return checkChat;
        }

        const newChat = new Chat({
            members: [id1, id2],
        });
        const chat = await newChat.save();
        return chat;
    } catch (err) {
        return err;
    }
};

const findUsersChats = async (userId: UserId) => {
    const { id } = userId;
    try {
        const chats = await Chat.findOne({
            members: { $in: [id] },
        });
        return chats;
    } catch (err) {
        return err;
    }
};
const findChat = async (userIds: UserIds) => {
    const { id1, id2 } = userIds;
    try {
        const chats = await Chat.find({
            $all: {
                members: [id1, id2],
            },
        });

        return chats;
    } catch (err) {
        return err;
    }
};

export { createChat, findUsersChats, findChat };
