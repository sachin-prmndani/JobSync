import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://jobsync-skuw.onrender.com',
    withCredentials: true,
})
export default axiosInstance
