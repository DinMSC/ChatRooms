import mongoose from 'mongoose';

const messageTemplate = new mongoose.Schema(
    {
        chatId: {
            type: String,
            required: true,
        },
        senderId: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model('Message', messageTemplate);

export default Message;
