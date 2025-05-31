import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './pages/styles.css';

// Componentes
import Navbar from './components/Navbar/Navbar';

// Páginas
import GenerarSolicitud from './pages/GenerarSolicitud/GenerarSolicitud';
import AprovarSolicitud from './pages/AprovarSolicitud/AprovarSolicitud';
import ConsultarSolicitudes from './pages/ConsultarSolicitudes/ConsultarSolicitudes';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/generar" element={<GenerarSolicitud />} />
            <Route path="/aprovar" element={<AprovarSolicitud />} />
            <Route path="/consultar" element={<ConsultarSolicitudes />} />
            <Route path="*" element={<Navigate to="/generar" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
