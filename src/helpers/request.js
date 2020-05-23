import axios from 'axios';

const {BASE_URL} = process.env;

const request = axios.create({
  baseURL: `${BASE_URL}`,
});

export default request;
