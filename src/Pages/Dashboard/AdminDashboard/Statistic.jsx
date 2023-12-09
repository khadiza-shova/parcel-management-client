import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';


const Statistic = () => {
    const [users,setUsers]= useState();
    const [book,setBook]= useState();
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        axiosPublic.get("/static").then(res=>{
            setUsers(res.data.users),
            setBook(res.data.book_parcles)
        })
    },[])

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2>Statistic</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


    <a href="#">
        <h5 className="mb-2 text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <CountUp start={0} end={book} duration={7.5} separator=","></CountUp>
        </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Parcel Booked</p>

</div>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


    <a href="#">
        <h5 className="mb-2 text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <CountUp start={0} end={0} duration={7.5} separator=","></CountUp>
        </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Parcel Delivered</p>

</div>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


    <a href="#">
        <h5 className="mb-2 text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <CountUp start={0} end={users} duration={7.5} separator=","></CountUp>
        </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Registered Users</p>

</div>

</div>
        </div>
    );
};

export default Statistic;