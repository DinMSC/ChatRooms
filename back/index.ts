import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes';
import chatRoutes from './src/routes/chatRoutes';
import messageRoutes from './src/routes/messageRoutes';

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose
    .connect(process.env.DATABASE_ACCESS as string)
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.error('Database Connection Error:', error);
    });

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});

app.use('/api', authRoutes);
app.use('/chat', chatRoutes);
app.use('/msg', messageRoutes);
