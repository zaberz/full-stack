import axios from 'axios';
import {getToken} from "./auth";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_PATH,
  timeout: 30000,
  withCredentials: true,
});


axiosInstance.interceptors.request.use(config => {
  let token = getToken();
  console.log(token);
  if (token) {
    // token = "Bearer" + " " + token.replace(/'|"/g, "");
    token =  `Bearer ${token}`;
    config.headers["authorization"] = token;
  }
  return config;
});

axiosInstance.interceptors.response.use((response)=> {
  if (response.status !== 200) {
    // 网络错误
    console.log(response.statusText)
    throw new Error(response.statusText)
  }

  let {code, message, data} = response.data;
  if (code !== 0) {
    // 业务错误
    console.log(message);
    throw new Error(message)
  }
  return data
})


export default axiosInstance;
