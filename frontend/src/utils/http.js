/* eslint-disable no-constant-condition */
import _ from "lodash";
import axios from "axios";

class Http {
  constructor(baseURL, headers = {}) {
    this.instance = axios.create({ baseURL, headers });
    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        console.error(
          `Request error: ${error.message}${_.isNil(
            error?.response?.data?.message
          )}`
            ? ""
            : `, data: ${error?.response?.data}`
        );
        return _.defaultTo(error?.response?.data?.message, error?.message);
      }
    );
  }

  get = async (endpoint = null) => await this.instance.get(endpoint);

  post = async (endpoint = null, data) =>
    await this.instance.post(endpoint, data);

  put = async (endpoint = null, data) =>
    await this.instance.put(endpoint, data);

  delete = async (endpoint = null, data) =>
    await this.instance.delete(endpoint, data);
}

export default new Http("http://ytsm-test-1.bilecik.edu.tr/api/todo");
