import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://jobSync-backend-yo6q.onrender.com',
    withCredentials: true,
})
export default axiosInstance
