import axios from "axios";

// const baseURL = "https://my-machine-store-dashboardapi.onrender.com";
// const baseURL = "http://15.207.31.23:5001";
const baseURL = "https://194.31.53.145:5000"
// const baseURL = "https://mymachinestore.com/enquiry";
export default axios.create({
  baseURL: baseURL,
  // withCredentials: true
});
// const apiUrl = 'http://localhost:5001';git
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
