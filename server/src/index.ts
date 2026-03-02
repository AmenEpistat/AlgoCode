import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Привет изf Exprhhesrs!' });
});


const PORT = 3001;
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('🚀 Сервер запущен на http://localhost:3000');
        });
    } catch (e) {
        console.error(e);
    }
};

start();