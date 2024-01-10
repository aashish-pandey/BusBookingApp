import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

export const getTripInfo = async (dataToSend) => {
  try {
    const response = await axios.post(API_ENDPOINTS.GET_TRIP_INFO, dataToSend);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch trip information');
  }
};