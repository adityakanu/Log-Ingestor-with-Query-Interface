import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import LogIngestForm from './components/LogIngestForm.jsx'
import LogList from './components/LogList.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/logs" element={<LogList />} />
    <Route path="/ingest" element={<LogIngestForm />} />
  </Routes>
  </BrowserRouter>
)
