import request from "../helpers/request";

const getTotalAllService = () => {
  return request({
    url: '/summary',
    method: 'GET',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {
    getTotalAllService,
};
