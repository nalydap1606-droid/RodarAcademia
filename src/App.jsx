import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal para la landing de la academia */}
        <Route path="/" element={<Public />} />
        
        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}