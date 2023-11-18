import axios from 'axios';
import { useEffect, useState } from 'react';

function LogList() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/logs');
        setLogs(response.data);
        } catch (error) {
        console.error('Error fetching logs:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {logs.map((log) => (
            <div key={log._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <p className="text-gray-600">{log.level} - {log.timestamp}</p>
            <p className="text-lg font-semibold">{log.message}</p>
            <p className="text-gray-500">{log.resourceId}</p>
            </div>
        ))}
        </div>
    );
}

export default LogList;
