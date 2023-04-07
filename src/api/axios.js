import axios from "axios";

const baseURL = "http://localhost:5001";
export default axios.create({
  baseURL: baseURL,
  withCredentials: true
});
// const apiUrl = 'http://localhost:5001';
// export default axios.interceptors.request.use(
//   config => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const token = localStorage.getItem('token');
//     console.log("token===>",token)
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
