import axios from 'axios';
import { API_ENDPOINTS } from '../config/apiConfig';

export const getTripInfo = async (dataToSend) => {
  try {
    console.log("API called")
    const response = await axios.post(API_ENDPOINTS.GET_TRIP_INFO, dataToSend);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch trip information');
  }
};

export const getBusSeatInfo = async(dataToSend)=>{
  try{

    const response = await axios.post(API_ENDPOINTS.GET_BUS_SEATS_INFO, dataToSend);
    return response.data;

  }catch (error){
    throw new Error('Failed to fetch seats information')
  }
}

export const makeTicket = async(dataToSend)=>{
  try{
    const response =  await axios.post(API_ENDPOINTS.Make_TICKET, dataToSend);
    return response.data;
  }catch(error){
    throw new Error('Failed to make Ticket')
  }
}