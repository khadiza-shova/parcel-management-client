import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';



const AllUser = () => {
    const axiosPublic = useAxiosPublic();

    const [users,setUsers]= useState([]);


    useEffect(()=>{
        axiosPublic.get('/users')
        .then(res=>{
            console.log(res.data);
            setUsers(res.data);
        })


    },[])


    const hadleMakeDliveryMen= (user)=>{
        
        axiosPublic.patch(`/users/deliveryMen/${user._id}`)
        .then(res =>{
            console.log(res.data)
            
            if(res.data.modifiedCount > 0){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Delivery Men Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  const remaining = users.filter(usersF=> usersF._id !== user._id);
                  const updated = users.find(userUp=> userUp._id == user._id);

                    updated.role ="Delivery_men"
                    const newBookings = [updated, ...remaining];
                    setUsers(newBookings);
            }
        })
       
    }
    const handleMakeAdmin= (user)=>{
        
        axiosPublic.patch(`/users/Makeadmin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            
            if(res.data.modifiedCount > 0){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  const remaining = users.filter(usersF=> usersF._id !== user._id);
                  const updated = users.find(userUp=> userUp._id == user._id);

                    updated.role ="Admin"
                    const newBookings = [updated, ...remaining];
                    setUsers(newBookings);
            }
        })
       
    }
    return (

<div className='w-11/12 mx-auto my-10'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Number of Parcel Booked
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Date
                </th>
                <th scope="col" className="px-6 py-3">
                Make Delivery Men
                </th>
                <th scope="col" className="px-6 py-3">
                Make Admin
                </th>
                
            </tr>
        </thead>
        <tbody>
        
             {
                users.map(user=><tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                    {user?.phoneNumber}
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                   
               
                    <button onClick={()=>hadleMakeDliveryMen(user)} className='btn'>
                    {
                        user.role == "User" && "User"
                    }
                    {
                        user.role == "Delivery_men" && "Delivery_men"
                    }
                    {
                        user.role == "Admin" && "Admin"
                    }
                    </button>
                  
                </td>
                <td className="px-6 py-4">
                    <button className='btn' onClick={()=>handleMakeAdmin(user)}>
                    {
                        user.role == "User" && "User"
                    }
                    {
                        user.role == "Delivery_men" && "Delivery_men"
                    }
                    {
                        user.role == "Admin" && "Admin"
                    }
                    </button>
                </td>
            </tr>)
            }  
         
            
           
        </tbody>
    </table>
</div>
</div>
        
    );
};

export default AllUser;