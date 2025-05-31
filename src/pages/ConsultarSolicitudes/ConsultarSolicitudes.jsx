import React, { useState } from 'react';

const ConsultarSolicitudes = () => {
  // Estado para almacenar las solicitudes (simuladas)
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, nombre: 'Juan Pérez', tipo: 'Tipo 1', fecha: '2023-05-15', descripcion: 'Solicitud de prueba 1', estado: 'aprobada' },
    { id: 2, nombre: 'María López', tipo: 'Tipo 2', fecha: '2023-05-16', descripcion: 'Solicitud de prueba 2', estado: 'rechazada' },
    { id: 3, nombre: 'Carlos Rodríguez', tipo: 'Tipo 3', fecha: '2023-05-17', descripcion: 'Solicitud de prueba 3', estado: 'pendiente' },
    { id: 4, nombre: 'Ana Martínez', tipo: 'Tipo 1', fecha: '2023-05-18', descripcion: 'Solicitud de prueba 4', estado: 'aprobada' },
  ]);

  // Estado para filtros
  const [filtros, setFiltros] = useState({
    estado: '',
    tipo: '',
    fechaDesde: '',
    fechaHasta: ''
  });

  // Manejar cambios en los filtros
  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value
    });
  };

  // Filtrar solicitudes según los criterios
  const solicitudesFiltradas = solicitudes.filter(solicitud => {
    // Filtro por estado
    if (filtros.estado && solicitud.estado !== filtros.estado) {
      return false;
    }
    
    // Filtro por tipo
    if (filtros.tipo && solicitud.tipo !== filtros.tipo) {
      return false;
    }
    
    // Filtro por fecha desde
    if (filtros.fechaDesde && new Date(solicitud.fecha) < new Date(filtros.fechaDesde)) {
      return false;
    }
    
    // Filtro por fecha hasta
    if (filtros.fechaHasta && new Date(solicitud.fecha) > new Date(filtros.fechaHasta)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container">
      <h1>Consultar Solicitudes</h1>
      
      <div className="filtros-container">
        <h3>Filtros</h3>
        <div className="filtros-form">
          <div className="filtro-grupo">
            <label htmlFor="estado">Estado:</label>
            <select 
              id="estado" 
              name="estado" 
              value={filtros.estado} 
              onChange={handleFiltroChange}
            >
              <option value="">Todos</option>
              <option value="pendiente">Pendiente</option>
              <option value="aprobada">Aprobada</option>
              <option value="rechazada">Rechazada</option>
            </select>
          </div>
          
          <div className="filtro-grupo">
            <label htmlFor="tipo">Tipo:</label>
            <select 
              id="tipo" 
              name="tipo" 
              value={filtros.tipo} 
              onChange={handleFiltroChange}
            >
              <option value="">Todos</option>
              <option value="Tipo 1">Tipo 1</option>
              <option value="Tipo 2">Tipo 2</option>
              <option value="Tipo 3">Tipo 3</option>
            </select>
          </div>
          
          <div className="filtro-grupo">
            <label htmlFor="fechaDesde">Desde:</label>
            <input 
              type="date" 
              id="fechaDesde" 
              name="fechaDesde" 
              value={filtros.fechaDesde} 
              onChange={handleFiltroChange}
            />
          </div>
          
          <div className="filtro-grupo">
            <label htmlFor="fechaHasta">Hasta:</label>
            <input 
              type="date" 
              id="fechaHasta" 
              name="fechaHasta" 
              value={filtros.fechaHasta} 
              onChange={handleFiltroChange}
            />
          </div>
        </div>
      </div>
      
      <div className="solicitudes-tabla">
        <h3>Resultados ({solicitudesFiltradas.length})</h3>
        {solicitudesFiltradas.length === 0 ? (
          <p>No se encontraron solicitudes con los criterios seleccionados.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {solicitudesFiltradas.map(solicitud => (
                <tr key={solicitud.id} className={`estado-${solicitud.estado}`}>
                  <td>{solicitud.id}</td>
                  <td>{solicitud.nombre}</td>
                  <td>{solicitud.tipo}</td>
                  <td>{solicitud.fecha}</td>
                  <td>{solicitud.estado}</td>
                  <td>{solicitud.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ConsultarSolicitudes;