import axios from 'axios';
import Config from "react-native-config";


console.log(Config.BASE_URL)

const request = axios.create({
  baseURL: Config.BASE_URL,
});

export default request;
