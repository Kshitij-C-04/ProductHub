import axios from "axios";

<<<<<<< HEAD
console.log("API URL:", import.meta.env.VITE_API_URL);
=======

>>>>>>> 4c584083329d4d6d0013d991dc5b61556c416fe4

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});

<<<<<<< HEAD
export default api;
=======
export default api;
>>>>>>> 4c584083329d4d6d0013d991dc5b61556c416fe4
