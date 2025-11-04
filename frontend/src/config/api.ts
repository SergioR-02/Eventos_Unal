// Configuración de la API

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:1337',
  apiPath: '/api',
  token: import.meta.env.VITE_API_TOKEN || ''
};

export const getImageUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${API_CONFIG.baseURL}${path}`;
};
