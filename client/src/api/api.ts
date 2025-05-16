import axios from 'axios';
import type { AdminCredentials, Need } from '../types';


const BASE_URL = import.meta.env.VITE_API_BASE_URL;;

export const fetchNeeds = () => axios.get<Need[]>(`${BASE_URL}/needs`);

export const postNeed = (data: Need) => axios.post(`${BASE_URL}/needs`, data);

export const adminLogin = (credentials: AdminCredentials) =>
  axios.post(`${BASE_URL}/admin/login`, credentials);

export const updateNeed = (id: string, data: Partial<Need>, token: string) =>
  axios.put(`${BASE_URL}/needs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteNeed = (id: string, token: string) =>
  axios.delete(`${BASE_URL}/needs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
