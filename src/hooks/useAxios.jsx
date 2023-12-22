import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://zentask-steel.vercel.app"
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios