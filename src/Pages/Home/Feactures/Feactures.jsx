import React, { useEffect, useState } from 'react';
import Delivery from "../../../assets/icon_delivey.svg";
import fast from "../../../assets/icon_truck_fast.svg";
import wideCover from '../../../assets/icon_wide_cover.svg';
import CountUp from 'react-countup';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';



const Feactures = () => {

    const axiosPublic = useAxiosPublic();
    const [users,setUsers]= useState();
    const [book,setBook]= useState();

    useEffect(()=>{
        axiosPublic.get("/static").then(res=>{
            setUsers(res.data.users),
            setBook(res.data.book_parcles)
        })
    },[])
    return (
        <div className='my-20'>
            <h2 className='text-3xl text-center font-bold'> Our Features</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className='flex justify-center my-5'>
                        <img src={fast} alt="" />
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Parcel Safety</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We prioritize the safety of your parcels from the moment they are entrusted to us. Our team ensures that each parcel is securely packaged to withstand the rigors of transportation and protect its contents.</p>

                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center my-5'>
                        <img src={Delivery} alt="" />
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Super Fast Delivery</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.</p>

                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center my-5'>
                        <img src={wideCover} alt="" />
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Wide Coverage</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.</p>

                </div>

            </div>


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

export default Feactures;