import React, { useState } from 'react';
import { createSolicitud } from '../../services/api';

const GenerarSolicitud = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    monto: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [createdSolicitudId, setCreatedSolicitudId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén completos
    if (!formData.titulo || !formData.descripcion || !formData.monto) {
      setSubmitError('Por favor complete todos los campos');
      return;
    }
    
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    setCreatedSolicitudId(null);
    
    try {
      const response = await createSolicitud(formData);
      console.log('Solicitud creada:', response);
      setSubmitSuccess(true);
      
      // Guardar el ID de la solicitud creada
      if (response && response.ID) {
        setCreatedSolicitudId(response.ID);
      } else if (response && response.id) {
        setCreatedSolicitudId(response.id);
      }
      
      // Limpiar el formulario después de enviar
      setFormData({
        titulo: '',
        descripcion: '',
        monto: ''
      });
    } catch (err) {
      console.error('Error al enviar la solicitud:', err);
      setSubmitError('Error al enviar la solicitud. Por favor, intente nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1>Generar Solicitud</h1>
      <div className="form-container">
        {submitSuccess && (
          <div className="success-message">
            ¡Solicitud enviada con éxito!
            {createdSolicitudId && (
              <div className="solicitud-id">
                ID de la solicitud: <strong>{createdSolicitudId}</strong>
              </div>
            )}
          </div>
        )}
        {submitError && (
          <div className="error-message">
            {submitError}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input 
              type="text" 
              id="titulo" 
              name="titulo" 
              value={formData.titulo}
              onChange={handleChange}
              disabled={submitting}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
              id="descripcion" 
              name="descripcion" 
              rows="4"
              value={formData.descripcion}
              onChange={handleChange}
              disabled={submitting}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="monto">Monto:</label>
            <input 
              type="number" 
              id="monto" 
              name="monto" 
              min="0" 
              step="0.01"
              value={formData.monto}
              onChange={handleChange}
              disabled={submitting}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn-submit"
            disabled={submitting}
          >
            {submitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerarSolicitud;