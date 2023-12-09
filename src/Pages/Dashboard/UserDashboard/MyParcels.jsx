import React, { useEffect } from 'react';

import useAuth from '../../../Hooks/useAuth';
import useParcles from '../../../Hooks/useParcles';
import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const MyParcels = () => {
    
    const [parcles]= useParcles();
    console.log(parcles);

    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.Price, 0);
    console.log(totalPrice);
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-center text-2xl font-medium'>My ALl Parcels </h2>

            
            <div className='flex justify-between'>
                <button>Total Price : {totalPrice}</button>
                <Link to="/dashboard/payement">
                <button className='btn btn-sm'>Pay</button>
                </Link>
            </div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Parcle Type
                </th>
                <th scope="col" className="px-6 py-3">
                Requested Delivery Date
                </th>
              
                <th scope="col" className="px-6 py-3">
                Booking Date
                </th>
                <th scope="col" className="px-6 py-3">
                Delivery Men ID
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Status
                </th>
                <th scope="col" className="px-6 py-3">
                Update
                </th>
                <th scope="col" className="px-6 py-3">
                Review
                </th>
              
            </tr>
        </thead>
        <tbody>
            {
                parcles.map(parcle=><tr key={parcle._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {parcle.Parcel_Type}
                </th>
                <td className="px-6 py-4">
                    {parcle.Requested_delivery_time
}
                </td>
              
                <td className="px-6 py-4">
                    {parcle.Booking_Date}
                </td>
                <td className="px-6 py-4">
                    {parcle.DeliveryMen_id}
                </td>
                <td className="px-6 py-4">
                    {parcle.status}
                </td>
                <td className="px-6 py-4">
                  <Link to={`/dashboard/updateParcle/${parcle._id}`}>
                  <button className='btn btn-sm'>Update</button>  
                </Link>
                </td>
                <td className="px-6 py-4">
                   <button className='btn btn-sm'>Review</button>
                </td>
               
            </tr>
            )
            }
            
           
        </tbody>
    </table>
</div>



        </div>
    );
};

export default MyParcels;