import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf/';

export const getRandomStatus = async () => {
  const {
    data: { answer },
  } = await axios.get('api');

  return answer;
};
