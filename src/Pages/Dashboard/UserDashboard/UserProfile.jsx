import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const UserProfile = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
   

    const handleUpdateInfo=(e)=>{
        e.preventDefault();
        const form = e.target;
        const info ={
            phoneNumber : form.number.value
        }
        console.log(info);
        axiosPublic.patch(`updateProfile/${user.email}`,info).then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: "Good job!",
                    text: "User Info Updated Successfully",
                    icon: "success"
                  });
            }
        }
            );
    }

    return (
        <div>
            <div className="w-1/2 my-10 mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt=" image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.displayName}</h5>
                  
                    <div className="flex mt-4 md:mt-6">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Update Info</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleUpdateInfo}>
                                    <h3 className="font-bold text-lg">Enter Phone Number</h3>
                                    <p className="py-4">
                                        <input type="text" name="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </p>
                                    <button className='btn '>Submit</button>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Upload Profile Picture</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;