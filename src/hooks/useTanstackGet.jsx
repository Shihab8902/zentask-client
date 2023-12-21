import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useTanstackGet = (queryKey, url) => {
    const axiosInstance = useAxios();


    const { isLoading, error, data, refetch } = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const result = await axiosInstance.get(url);
            return result.data;
        }

    });


    return { isLoading, error, data, refetch }
}

export default useTanstackGet