import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useAllUser = () => {
            const axiosPublic  = useAxiosPublic();
           

            const {data:user=[] , isPending: isUserLoading}= useQuery({
                queryKey:["user"],
                queryFn:async()=>{
                    const res =await axiosPublic.get(`/users`)
                    return res.data?.result;
                }
            })
            return [user, isUserLoading];
       
};

export default useAllUser;