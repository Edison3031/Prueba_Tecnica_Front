import React, { useState, useEffect } from 'react';
import { getSolicitudes } from '../../services/api';

const ConsultarSolicitudes = () => {
  // Estado para almacenar las solicitudes
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Estados para la paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 10;

  // Cargar solicitudes al montar el componente
  useEffect(() => {
    const fetchSolicitudes = async () => {
      setLoading(true);
      try {
        const data = await getSolicitudes();
        // La función getSolicitudes ya devuelve un array directamente
        setSolicitudes(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar las solicitudes. Por favor, intente nuevamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSolicitudes();
  }, []);

  // Calcular índices para la paginación
  const indexUltimoRegistro = paginaActual * registrosPorPagina;
  const indexPrimerRegistro = indexUltimoRegistro - registrosPorPagina;
  const registrosActuales = solicitudes.slice(indexPrimerRegistro, indexUltimoRegistro);
  const totalPaginas = Math.ceil(solicitudes.length / registrosPorPagina);

  // Función para cambiar de página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  // Generar números de página
  const numerosPagina = [];
  for (let i = 1; i <= totalPaginas; i++) {
    numerosPagina.push(i);
  }

  return (
    <div className="container">
      <h1>Consultar Solicitudes</h1>
      
      <div className="solicitudes-tabla">
        <h3>Resultados ({solicitudes.length})</h3>
        {loading ? (
          <p>Cargando solicitudes...</p>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : solicitudes.length === 0 ? (
          <p>No se encontraron solicitudes.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {registrosActuales.map(solicitud => (
                  <tr key={solicitud.ID} className={`estado-${solicitud.Estado.toLowerCase()}`}>
                    <td>{solicitud.Titulo}</td>
                    <td>{solicitud.Descripcion}</td>
                    <td>{solicitud.Monto}</td>
                    <td>{solicitud.Estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Paginación */}
            {totalPaginas > 1 && (
              <div className="paginacion">
                <button 
                  onClick={() => cambiarPagina(paginaActual - 1)} 
                  disabled={paginaActual === 1}
                  className="btn-pagina"
                >
                  Anterior
                </button>
                
                {numerosPagina.map(numero => (
                  <button
                    key={numero}
                    onClick={() => cambiarPagina(numero)}
                    className={`btn-pagina ${paginaActual === numero ? 'activa' : ''}`}
                  >
                    {numero}
                  </button>
                ))}
                
                <button 
                  onClick={() => cambiarPagina(paginaActual + 1)} 
                  disabled={paginaActual === totalPaginas}
                  className="btn-pagina"
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultarSolicitudes;