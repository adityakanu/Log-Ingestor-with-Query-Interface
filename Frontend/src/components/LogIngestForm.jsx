import axios from 'axios';
import { useState } from 'react';

function LogIngestForm() {
    const [formData, setFormData] = useState({
        level: '',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        metadata: {
            parentResourceId: '',
        },
    });
    const handleInsertPresentTime = () => {
        // Create a new Date object to get the current time
        const currentTime = new Date().toISOString();
        // Update the timestamp field in the form data
        setFormData((prevData) => ({ ...prevData, timestamp: currentTime }));
    };
    const handleInputChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post('http://localhost:3000/api/logs', formData);
        // Optionally, clear the form after submission
        setFormData({ level: '', message: '', resourceId: '' , timestamp: '', traceId: '', spanId: '', commit: '', metadata: { parentResourceId: '' } });
        } catch (error) {
        console.error('Error ingesting log:', error);
        }
    };

    return (
        <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
            Level
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="level"
            type="text"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="resourceId">
            Resource ID
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resourceId"
            type="text"
            name="resourceId"
            value={formData.resourceId}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4 flex items-center">
            <label className="block text-gray-700 font-bold mb-2 mr-2" htmlFor="timestamp">
            Timestamp
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="timestamp"
            type="text"
            name="timestamp"
            value={formData.timestamp}
            onChange={handleInputChange}
            />
            <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
            onClick={handleInsertPresentTime}
            >
            Insert Present Time
            </button>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="traceId">
            Trace ID
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="traceId"
            type="text"
            name="traceId"
            value={formData.traceId}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="spanId">
            Span ID
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="spanId"
            type="text"
            name="spanId"
            value={formData.spanId}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commit">
            Commit
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="commit"
            type="text"
            name="commit"
            value={formData.commit}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="metadata">
            Metadata
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="metadata"
            type="text"
            name="metadata"
            value={formData.metadata}
            onChange={handleInputChange}
            />
        </div>
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Ingest Log
        </button>
        </form>
    );
}

export default LogIngestForm;
