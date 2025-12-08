import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useChartCollect = () => {
    const axiosSecure = useAxiosSecure()
    const {data = {}} = useQuery({
        queryKey: ["chart-collection"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/api/chartcollections");
            return data
        }
    })
  return [data]
}

export default useChartCollect