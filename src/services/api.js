import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Configuración base de axios
const api = axios.create({
  baseURL: 'https://bi3uuutrid.execute-api.sa-east-1.amazonaws.com/dev',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Servicio para obtener libros
export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    throw error;
  }
};

// Servicio para crear una nueva solicitud
export const createSolicitud = async (solicitudData) => {
  try {
    // Generar un ID aleatorio usando uuidv4
    const randomId = uuidv4();
    
    // Crear el objeto con el formato requerido
    const solicitud = {
      body: {
      ID: randomId,
      Titulo: solicitudData.titulo,
      Descripcion: solicitudData.descripcion,
      Monto: solicitudData.monto,
      Estado: "Pendiente",
      Aprovacion1: "False",
      Aprovacion2: "False",
      Aprovacion3: "False"
      }
    };
    
    console.log('Enviando solicitud con ID:', randomId);
    const response = await api.post('/Solicitudes', solicitud);
    return response.data;
  } catch (error) {
    console.error('Error al crear la solicitud:', error);
    throw error;
  }
};

// Servicio para obtener todas las solicitudes
export const getSolicitudes = async () => {
  try {
    const response = await api.get('/Solicitudes');
    // La respuesta tiene un formato específico donde los datos están en response.data.body como string JSON
    if (response.data && response.data.body) {
      try {
        // Intentar parsear el body que viene como string
        const parsedBody = JSON.parse(response.data.body);
        // Devolver el array de items
        return parsedBody.items || [];
      } catch (parseError) {
        console.error('Error al parsear el body de la respuesta:', parseError);
        return [];
      }
    }
    return [];
  } catch (error) {
    console.error('Error al obtener las solicitudes:', error);
    throw error;
  }
};

// Exportamos el cliente axios configurado para uso general
export default api;