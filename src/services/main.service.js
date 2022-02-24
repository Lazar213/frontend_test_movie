import config from 'utils/config';
import httpService from './http.service';

const getSearchList = (params) => httpService
  .get(`${config.listURL}/search`, {}, params)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getMovie = (id, params) => httpService
  .get(`${config.serverURL}/find/${id}`, {}, params)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  getSearchList,
  getMovie,
};
