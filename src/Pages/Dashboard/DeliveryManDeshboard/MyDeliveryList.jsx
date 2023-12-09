import React, { useEffect } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';

const MyDeliveryList = () => {

    const axiosPublic = useAxiosPublic();
    const {user}= useAuth();
    useEffect(()=>{
        axiosPublic.get(`/users/myDeliveryList/${user.email}`)
        .then(res=>{
            console.log(res.data.result._id);

        })
    },[])
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-3xl font-bold text-center'>My Delivery List</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Delivery Men's Name
                </th>
                <th scope="col" className="px-6 py-3">
                Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                Number of parcel delivered
                </th>
                <th scope="col" className="px-6 py-3">
                Average review

                </th>
                
                
            </tr>
        </thead>
        <tbody>
        
            
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
               
                </td>
                <td className="px-6 py-4">
                
                </td>
               
            </tr>
           
        
            
           
        </tbody>
    </table>
</div>
        </div>
    );
};

export default MyDeliveryList;