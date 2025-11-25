import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Materias
export const materiaService = {
  getAll: () => api.get('/api/materias'),
  getById: (id: string) => api.get(`/api/materias/${id}`),
  create: (data: any) => api.post('/api/materias', data),
  update: (id: string, data: any) => api.put(`/api/materias/${id}`, data),
  delete: (id: string) => api.delete(`/api/materias/${id}`),
  getProgress: (id: string) => api.get(`/api/materias/${id}/progress`),
};

// Topicos
export const topicoService = {
  getAll: () => api.get('/api/topicos'),
  getById: (id: string) => api.get(`/api/topicos/${id}`),
  getByMateria: (materiaId: string) => api.get(`/api/topicos/materia/${materiaId}`),
  create: (data: any) => api.post('/api/topicos', data),
  update: (id: string, data: any) => api.put(`/api/topicos/${id}`, data),
  delete: (id: string) => api.delete(`/api/topicos/${id}`),
};

// Recursos
export const recursoService = {
  getAll: () => api.get('/api/recursos'),
  getById: (id: string) => api.get(`/api/recursos/${id}`),
  getByTopico: (topicoId: string) => api.get(`/api/recursos/topico/${topicoId}`),
  create: (data: any) => api.post('/api/recursos', data),
  update: (id: string, data: any) => api.put(`/api/recursos/${id}`, data),
  delete: (id: string) => api.delete(`/api/recursos/${id}`),
};

// Sessoes de Estudo
export const sessaoEstudoService = {
  getAll: (startDate?: string, endDate?: string) => {
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    return api.get(`/api/sessoes?${params.toString()}`);
  },
  getById: (id: string) => api.get(`/api/sessoes/${id}`),
  getByTopico: (topicoId: string) => api.get(`/api/sessoes/topico/${topicoId}`),
  create: (data: any) => api.post('/api/sessoes', data),
  update: (id: string, data: any) => api.put(`/api/sessoes/${id}`, data),
  delete: (id: string) => api.delete(`/api/sessoes/${id}`),
};

export default api;
