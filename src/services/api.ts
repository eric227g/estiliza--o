import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.5.248:5001/vehicles-59fd0/us-central1",
});

export default api;
