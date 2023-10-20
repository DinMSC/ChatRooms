import { MessageTypes, Id } from '../interfaces/interfaces';
import Message from '../models/messageModel';

const createMessage = async (data: MessageTypes) => {
    const { chatId, senderId, text } = data;

    const message = new Message({
        chatId,
        senderId,
        text,
    });

    try {
        const response = await message.save();
        return response;
    } catch (err) {
        return err;
    }
};

// const getMessages = async (chatId: Id) => {
//     const id = chatId.id;
//     try {
//         const messages = await Message.find({ id });
//         return messages;
//     } catch (err) {
//         return err;
//     }
// };

const getMessages = async (params: Id) => {
    const chatId = params.id;
    try {
        const messages = await Message.find({ chatId });
        return messages;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export { createMessage, getMessages };
