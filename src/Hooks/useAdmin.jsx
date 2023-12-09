import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useAdmin = () => {
            const axiosPublic  = useAxiosPublic();
            const {user}= useAuth();

            const {data:isAdmin , isPending: isAdminLoading}= useQuery({
                queryKey:[user?.email, "isAdmin"],
                queryFn:async()=>{
                    const res =await axiosPublic.get(`/users/admin/${user.email}`)
                    return res.data?.admin;
                }
            })
            return [isAdmin, isAdminLoading];
       
};

export default useAdmin;