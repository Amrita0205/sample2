import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import notesRoutes from './src/routes/notes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', notesRoutes);
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});