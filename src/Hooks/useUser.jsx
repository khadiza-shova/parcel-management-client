import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useUser = () => {
            const axiosPublic  = useAxiosPublic();
            const {user}= useAuth();

            const {data:isUser , isPending: isUserLoading}= useQuery({
                queryKey:[user?.email, "isUser"],
                queryFn:async()=>{
                    const res =await axiosPublic.get(`/users/user/${user.email}`)
                    return res.data?.user;
                }
            })
            return [isUser, isUserLoading];
       
};

export default useUser;