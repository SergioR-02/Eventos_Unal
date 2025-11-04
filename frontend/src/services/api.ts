import axios from 'axios';
import { API_CONFIG } from '../config/api';
import type { StrapiListResponse, Event, Category } from '../types/api';

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: `${API_CONFIG.baseURL}${API_CONFIG.apiPath}`,
  headers: {
    'Authorization': `Bearer ${API_CONFIG.token}`,
    'Content-Type': 'application/json',
  },
});

// Servicio para eventos
export const eventService = {
  async getAll(): Promise<Event[]> {
    const response = await apiClient.get<StrapiListResponse<Event>>('/events', {
      params: {
        populate: '*',
      },
    });
    return response.data.data;
  },

  async getById(documentId: string): Promise<Event> {
    const response = await apiClient.get<StrapiListResponse<Event>>('/events', {
      params: {
        'filters[documentId][$eq]': documentId,
        populate: '*',
      },
    });
    return response.data.data[0];
  },

  async getByCategory(categoryName: string): Promise<Event[]> {
    const response = await apiClient.get<StrapiListResponse<Event>>('/events', {
      params: {
        'filters[categories][name][$eq]': categoryName,
        populate: '*',
      },
    });
    return response.data.data;
  },
};

// Servicio para categorías
export const categoryService = {
  async getAll(): Promise<Category[]> {
    const response = await apiClient.get<StrapiListResponse<Category>>('/categories');
    return response.data.data;
  },
};

export default apiClient;
