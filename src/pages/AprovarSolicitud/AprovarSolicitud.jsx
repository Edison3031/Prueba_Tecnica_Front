import React, { useState } from 'react';

const AprovarSolicitud = () => {
  // Estado para almacenar las solicitudes pendientes (simuladas)
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, nombre: 'Juan Pérez', tipo: 'Tipo 1', fecha: '2023-05-15', descripcion: 'Solicitud de prueba 1', estado: 'pendiente', Aprovacion1: false, Aprovacion2: false, Aprovacion3: false },
    { id: 2, nombre: 'María López', tipo: 'Tipo 2', fecha: '2023-05-16', descripcion: 'Solicitud de prueba 2', estado: 'pendiente', Aprovacion1: false, Aprovacion2: false, Aprovacion3: false },
    { id: 3, nombre: 'Carlos Rodríguez', tipo: 'Tipo 3', fecha: '2023-05-17', descripcion: 'Solicitud de prueba 3', estado: 'pendiente', Aprovacion1: false, Aprovacion2: false, Aprovacion3: false },
  ]);

  // Función para aprobar una solicitud
  const aprobarSolicitud = (id) => {
    setSolicitudes(solicitudes.map(solicitud => {
      if (solicitud.id === id) {
        // Actualizar los campos de aprobación
        const updatedSolicitud = { 
          ...solicitud, 
          Aprovacion1: true, 
          Aprovacion2: true, 
          Aprovacion3: true,
          estado: 'aprobada' 
        };
        
        // Aquí iría la llamada a la lambda de actualización
        // updateSolicitudLambda(updatedSolicitud);
        
        return updatedSolicitud;
      }
      return solicitud;
    }));
  };

  // Función para rechazar una solicitud
  const rechazarSolicitud = (id) => {
    setSolicitudes(solicitudes.map(solicitud => {
      if (solicitud.id === id) {
        // Actualizar los campos de aprobación como rechazados
        const updatedSolicitud = { 
          ...solicitud, 
          Aprovacion1: false, 
          Aprovacion2: false, 
          Aprovacion3: false,
          estado: 'rechazada' 
        };
        
        // Aquí iría la llamada a la lambda de actualización
        // updateSolicitudLambda(updatedSolicitud);
        
        return updatedSolicitud;
      }
      return solicitud;
    }));
  };

  // Simulación de la función lambda de actualización
  const updateSolicitudLambda = (solicitud) => {
    console.log('Actualizando solicitud en la base de datos:', solicitud);
    // Aquí iría el código para llamar a la API/Lambda que actualiza la base de datos
    // con los campos Aprovacion1, Aprovacion2, Aprovacion3
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
              <p><strong>Estado de aprobaciones:</strong></p>
              <ul>
                <li>Aprobación 1: {solicitud.Aprovacion1 ? '✅' : '❌'}</li>
                <li>Aprobación 2: {solicitud.Aprovacion2 ? '✅' : '❌'}</li>
                <li>Aprobación 3: {solicitud.Aprovacion3 ? '✅' : '❌'}</li>
              </ul>
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