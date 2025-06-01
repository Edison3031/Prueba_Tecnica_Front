import React from 'react';

const AprovarSolicitud = () => {
  // Funciones para manejar los eventos de los botones
  const handleAprovar = () => {
    console.log('Solicitud aprobada');
    // Aquí iría la lógica para aprobar la solicitud
  };

  const handleRechazar = () => {
    console.log('Solicitud rechazada');
    // Aquí iría la lógica para rechazar la solicitud
  };

  return (
    <div className="container">
      <h1>Aprobar Solicitudes</h1>
      <div className="accion-container">
        <button 
          onClick={handleAprovar} 
          className="btn-aprobar"
        >
          Aprovar
        </button>
        <button 
          onClick={handleRechazar} 
          className="btn-rechazar"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default AprovarSolicitud;