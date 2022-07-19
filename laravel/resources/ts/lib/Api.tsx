// ---[ import ]----------------------------------------------------------------
import axios from 'axios';

// ---[ process ]---------------------------------------------------------------
export const getUser = async() => {
  try {
    const user = await axios.get(`api/user`);
    return user.data;
  } catch (error) {
    console.error(error);
  }
}
