import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate= useNavigate();
    
    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email,data.pass)
        .then(res=>{
            console.log(res.user);
            const loggedUser= res.user;
            // Update Profile 

            updateUserProfile(data.name,data.image)
            .then(res=>{
               const userInfo ={
                name: data.name,
                email :data.email,
                phoneNumber : data.phoneNumber,
                pass: data.pass,
                role : data.role,
                image : data.image
                
               }
                // create user Entry In the database 
                axiosPublic.post("/users",userInfo)
                .then(res=>{
                    console.log(res.data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration Successfully Complete",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate('/');

                })
                .catch(error=>{
                    console.log(error);
                })
                
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire(error.message);
        })

    }

   


    return (
        <div className='my-10 '>


            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm border mx-auto  p-12">
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Name:</label>
                    <input {...register('name',{required:true})} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name"  />
                    {errors.name && <span className='text-red-500'>Name is Required</span>}
                </div>

                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Email:</label>
                    <input {...register('email',{required:true})} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email"  />
                    {errors.email && <span className='text-red-500'>Email is Required</span>}
                </div>
                <div className="mb-5">
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Phone Number:</label>
                    <input {...register('phoneNumber',{required:true})} type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone Number"  />
                    {errors.phoneNumber && <span className='text-red-500'>Phone Number is Required</span>}
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"> Password:</label>
                    <input {...register("pass", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Pass'  />
                                {errors.pass?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.pass?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.pass?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.pass?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                </div>
                <div className='mb-5'>
                    <label for="countries" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select  Role</label>
                    <select defaultValue='default' {...register("role",{required:true})} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option selected disabled>Select a Role</option>
                        <option value="User">User</option>
                        <option value="Delivery_men">Delivery Men</option>
                        
                    </select>
                </div>
                <div className='mb-5'>



                    {/* <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" /> */}
                    <input {...register('image')} type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Image Url'  />

                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block">Sign Up</button>

                <p>Already have an account? <Link to="/login" className='font-bold'>Login here</Link></p>
            </form>



          <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;