import React from 'react';

const GenerarSolicitud = () => {
  return (
    <div className="container">
      <h1>Generar Solicitud</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Solicitud:</label>
            <select id="tipo" name="tipo">
              <option value="">Seleccione un tipo</option>
              <option value="tipo1">Tipo 1</option>
              <option value="tipo2">Tipo 2</option>
              <option value="tipo3">Tipo 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" />
          </div>
          <button type="submit" className="btn-submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default GenerarSolicitud;