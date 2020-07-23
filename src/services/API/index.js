import axios from "axios";
import { history } from "../history";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      history.push("/");
    }
    return Promise.reject(error);
  }
);

export const setAuthHeaders = (token) => {
  instance.defaults.headers.common["Authorization"] = "Bearer " + token;
};

export const API = instance;
