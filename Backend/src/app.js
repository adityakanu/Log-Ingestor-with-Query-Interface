import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Log from './models/logs.model.js';
const app = express();
app.use(cors({
    origin: "process.env.CORS_ORIGIN",
    credentials: true
}));


// the public with temp folder in it
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
    
        if (req.query.level) {
            query.level = req.query.level;
        }
    
        if (req.query.message) {
            query.message = { $regex: req.query.message, $options: 'i' };
        }
    
        if (req.query.resourceId) {
            query.resourceId = req.query.resourceId;
        }
    
        if (req.query.timestampStart && req.query.timestampEnd) {
            query.timestamp = {
            $gte: new Date(req.query.timestampStart),
            $lte: new Date(req.query.timestampEnd),
            };
        }
    
        // Add criteria for other properties
        if (req.query.traceId) {
            query.traceId = req.query.traceId;
        }
    
        if (req.query.spanId) {
            query.spanId = req.query.spanId;
        }
    
        if (req.query.commit) {
            query.commit = req.query.commit;
        }
    
        if (req.query['metadata.parentResourceId']) {
            query['metadata.parentResourceId'] = req.query['metadata.parentResourceId'];
        }
    
        // Fetch logs based on the constructed query
        const logs = await Log.find(query);
    
        res.json(logs);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



export default app;