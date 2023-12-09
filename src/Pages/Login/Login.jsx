import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn}= useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate =useNavigate();

    const onSubmit = data => {
        console.log(data);

        signIn(data.email, data.pass)
        .then(res=>{
            console.log(res);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire(error.message);
        })
    };

    return (
        <div className='my-10 '>


            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm border mx-auto  p-12">
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Email:</label>
                    <input {...register('email',{required:true})} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email"  />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Password:</label>
                    <input {...register('pass')} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Pass'  />
                </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block">Sign In</button>
            
            <p>Don’t have an account yet? <Link className='font-bold' to="/register">Sign up</Link></p>
            </form>



           <SocialLogin></SocialLogin>

           
        </div>
    );
};

export default Login;