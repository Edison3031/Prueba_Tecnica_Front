import React from 'react';

const GenerarSolicitud = () => {
  return (
    <div className="container">
      <h1>Generar Solicitud</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="monto">Monto:</label>
            <input type="number" id="monto" name="monto" min="0" step="0.01" />
          </div>
          <button type="submit" className="btn-submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default GenerarSolicitud;