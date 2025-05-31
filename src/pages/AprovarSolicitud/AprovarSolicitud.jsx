import React, { useState } from 'react';

const AprovarSolicitud = () => {
  // Estado para almacenar las solicitudes pendientes (simuladas)
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, nombre: 'Juan Pérez', tipo: 'Tipo 1', fecha: '2023-05-15', descripcion: 'Solicitud de prueba 1', estado: 'pendiente' },
    { id: 2, nombre: 'María López', tipo: 'Tipo 2', fecha: '2023-05-16', descripcion: 'Solicitud de prueba 2', estado: 'pendiente' },
    { id: 3, nombre: 'Carlos Rodríguez', tipo: 'Tipo 3', fecha: '2023-05-17', descripcion: 'Solicitud de prueba 3', estado: 'pendiente' },
  ]);

  // Función para aprobar una solicitud
  const aprobarSolicitud = (id) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: 'aprobada' } : solicitud
    ));
  };

  // Función para rechazar una solicitud
  const rechazarSolicitud = (id) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: 'rechazada' } : solicitud
    ));
  };

  return (
    <div className="container">
      <h1>Aprobar Solicitudes</h1>
      <div className="solicitudes-list">
        {solicitudes.filter(s => s.estado === 'pendiente').length === 0 ? (
          <p>No hay solicitudes pendientes de aprobación.</p>
        ) : (
          solicitudes.filter(s => s.estado === 'pendiente').map(solicitud => (
            <div key={solicitud.id} className="solicitud-card">
              <h3>Solicitud #{solicitud.id}</h3>
              <p><strong>Nombre:</strong> {solicitud.nombre}</p>
              <p><strong>Tipo:</strong> {solicitud.tipo}</p>
              <p><strong>Fecha:</strong> {solicitud.fecha}</p>
              <p><strong>Descripción:</strong> {solicitud.descripcion}</p>
              <div className="action-buttons">
                <button 
                  onClick={() => aprobarSolicitud(solicitud.id)} 
                  className="btn-aprobar"
                >
                  Aprobar
                </button>
                <button 
                  onClick={() => rechazarSolicitud(solicitud.id)} 
                  className="btn-rechazar"
                >
                  Rechazar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AprovarSolicitud;