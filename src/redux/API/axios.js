import axios from "axios";
import { clearToken } from "../auth/authSlice";
export const instance = axios.create({
  baseURL: "https://e-pharmacy-backend-ez9m.onrender.com/api",
});

export const setupAPI = (dispatch) => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        dispatch(clearToken());
      }

      return Promise.reject(error);
    }
  );
};
