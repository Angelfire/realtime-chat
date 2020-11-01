import axios from 'axios';
import { GIPHY_API_KEY, GIPHY_BASE_URL } from './const';

export const formatDate = date => {
  const messageTime = new Date(date);
  const hours = messageTime.getHours();
  const minutes = messageTime.getMinutes();
  const isAfternoon = hours > 12;
  const ampm = isAfternoon ? 'pm' : 'am';
  const formattedHours = isAfternoon ? hours - 12 : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export const getGiphy = tag => 
  axios
    .get(GIPHY_BASE_URL, {
      params: {
        api_key: GIPHY_API_KEY,
        tag,
      },
    })
    .then((resp) => resp.data.data);
