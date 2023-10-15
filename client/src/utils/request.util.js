import _ from 'lodash';

import axios from 'axios';

class Request {
  constructor(baseURL, headers = {}) {
    this.instance = axios.create({
      baseURL,
      headers,
    });
    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        console.error(`Request error: ${error.message}${_.isNil(error?.response?.data)}` ? '' : `, data: ${error?.response?.data}`);
        return error.message;
      },
    );
  }

  get = async (endpoint = null) => await this.instance.get(endpoint);

  post = async (endpoint, data) => await this.instance.post(endpoint, data);

  put = async (endpoint, data) => await this.instance.put(endpoint, data);

  delete = async (endpoint, data) => await this.instance.delete(endpoint, data);
}

export default Request;
