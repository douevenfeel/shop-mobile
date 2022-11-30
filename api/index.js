import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.0.167:5000/api' });

