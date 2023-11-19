import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Log from './models/logs.model.js';
const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}));


app.use(express.static("public"));

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try {
        const logData = req.body;

        const validationResult = Log.validate(logData);

        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.message });
        }

        const log = new Log(logData);
        await log.save();

        return res.status(201).json({ message: 'Log successfully ingested' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/logs', async (req, res) => {
    try {
        let query = {};
        query = req.query;
        const logs = await Log.find(query);
        res.json(logs);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



export default app;