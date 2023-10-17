
import axios from 'axios';

const BASE_URL = 'http://wokpa.ddns.net:9000'

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/#/Listener/post_api_listeners_login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (userData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/#/Listener/post_api_listeners_register`,  userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
