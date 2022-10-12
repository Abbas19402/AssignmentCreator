// import axios from "axios";

// export const http = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}`});

// let TOKEN
// if (typeof window !== 'undefined') {
//   TOKEN = localStorage.getItem("GET_AT");
// }

// axios.interceptors.request.use((config) => {
//   if (TOKEN) {
//     config.headers.Authorization = `Bearer ${TOKEN}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use((response) => {
//   if(response.status === 401) {
//        alert("You are not authorized");
//   }
//   return response;
// }, (error) => {
//   if (error.response && error.response.data) {
//       return Promise.reject(error.response.data);
//   }
//   return Promise.reject(error);
// });