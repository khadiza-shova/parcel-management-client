import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useDeliveryMen = () => {
            const axiosPublic  = useAxiosPublic();
            const {user}= useAuth();

            const {data:isDeliveryMen , isPending: isDeliveryMenLoading}= useQuery({
                queryKey:[user?.email, "isDeliveryMen"],
                queryFn:async()=>{
                    const res =await axiosPublic.get(`/users/deliveryMen/${user.email}`)
                    return res.data?.deliveryMen;
                }
            })
            return [isDeliveryMen, isDeliveryMenLoading];
       
};

export default useDeliveryMen;