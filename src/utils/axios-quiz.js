import axios from 'axios';
import { BASE_URL } from '../config/api.config';

export default axios.create({
  baseURL: BASE_URL,
});