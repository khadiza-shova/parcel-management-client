import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';



const AllDeliveryMen = () => {

    
    const axiosPublic = useAxiosPublic();

    const [allDeliveryMens,setAllDelivery]= useState([]);


    useEffect(()=>{
        axiosPublic.get(`allDeliveryMen`)
        .then(res=>{
          
            setAllDelivery(res.data.data);
        })


    },[])
    return (

     

<div className='w-11/12 mx-auto my-10'>
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
        
            {
                allDeliveryMens?.map(deliveryMen=><tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {deliveryMen.name}
                </th>
                <td className="px-6 py-4">
                    {deliveryMen.phoneNumber}
                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
               
                </td>
                <td className="px-6 py-4">
                
                </td>
               
            </tr>)
            }
        
            
           
        </tbody>
    </table>
</div>
</div>
        
    );
};

export default AllDeliveryMen;