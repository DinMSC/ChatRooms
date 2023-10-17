import mongoose from 'mongoose';

const chatTemplate = new mongoose.Schema(
    {
        members: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', chatTemplate);

export default Chat;
