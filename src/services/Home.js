import request from "../helpers/request";

const getTotalAllService = () => {
  return request.get('/summary');
}
const getToTalCovidService = () => {
  return request({
    url: '/summary',
    method: 'GET',
    timeout: 15000,
  }). then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  })
}
export {
    getTotalAllService,
    getToTalCovidService
};
