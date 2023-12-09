import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useParcles = () => {
    const axiosPublic = useAxiosPublic();
    const { user} = useAuth();


    const { refetch, data: parcles = [] } = useQuery({
        queryKey: ['parcles', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`myParcles/${user.email}`);
            return res.data.result;
        }
    })

    return [parcles, refetch]
};

export default useParcles;