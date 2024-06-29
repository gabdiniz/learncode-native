import axios, { AxiosError } from 'axios';
import { apiConfig } from './apiConfig';

const api = axios.create(apiConfig);

export const apiService = {
  get: async (endpoint: string, params = {}) => {
    try {
      const response = await api.get(endpoint, { params });
      return response.data;
    }
    catch (error) {
      return handleApiError(error as AxiosError);
    }
  },
  post: async (endpoint: string, data: object) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    }
    catch (error) {
      return handleApiError(error as AxiosError);
    }
  },
  put: async (endpoint: string, data: object) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    }
    catch (error) {
      return handleApiError(error as AxiosError);
    }
  },
  delete: async (endpoint: string) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    }
    catch (error) {
      return handleApiError(error as AxiosError);
    }
  }
};

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    return error.response.data;
  }
  else if (error.request) {
    throw new Error('No response received from server');
  }
  else {
    throw new Error(error.message);
  }
};
