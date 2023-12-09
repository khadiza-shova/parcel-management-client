import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const AllParcels = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const [allDeliveryMens, setAllDelivery] = useState([]);
    const [selectedParcleId, setSelectedParcelId] = useState([]);


    useEffect(() => {
        axiosPublic.get(`allDeliveryMen`)
            .then(res => {

                setAllDelivery(res.data.data);
            })


    }, [])

    const [allParcels, setAllParcles] = useState([]);


    const handelAssign = (e) => {
        
        e.preventDefault();
        const form = new FormData(e.target);
        const parcleId = form.get("parcleId")
        const deliveryMenId = form.get("men")
        // const deliveryMenId = form.default.value;
        // console.log(id);
        console.log("Delivery Men Id",deliveryMenId);
        console.log("Parcle Id",parcleId);

        const updateParcle ={
            deliveryMenId : deliveryMenId,
            status : "On the Way"
        }

        axiosPublic.patch(`deliveryMen/${parcleId}`,updateParcle)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Delivery Men Added SUccessfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/dashboard/allParcles');
            }
        })
    }

    useEffect(() => {
        axiosPublic.get('/allParcels')
            .then(res => {
                console.log(res.data);
                setAllParcles(res.data);
            })


    }, [])


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
                                Booking Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Requested Delivery Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cost
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Manage Button
                            </th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            allParcels.map(parcels =>

                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {parcels.Name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {parcels.Phone_Number}
                                    </td>
                                    <td className="px-6 py-4">
                                        {parcels.Booking_Date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {parcels.Requested_delivery_time}
                                    </td>
                                    <td className="px-6 py-4">
                                        {parcels.Price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p> {parcels.status}</p>
                                       
                                    </td>


                                    <td className="px-6 py-4">
                                        {parcels.status == "pending" &&


                                        <div>
                                            <button className="btn" onClick={() => 
                                            {
                                                // setSelectedParcelId(parcels._id);
                                                document.getElementById('my_modal_1').showModal();
                                                setSelectedParcelId(parcels._id);
                                            }

                                            
                                        }>Manage Parcels</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">

                                                <form onSubmit={handelAssign}>
                                                   
                                                    <div className='mb-5'>

                                                  
                                                      <input type="text" hidden name="parcleId" value={selectedParcleId} />

                                                        <label for="countries" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Men</label>
                                                        <select defaultValue='default' name="men" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            <option selected disabled>Select a Role</option>
                                                            {
                                                                allDeliveryMens.map((deliveryMen) => <option value={deliveryMen._id}>{deliveryMen.name}</option>)
                                                            }

                                                        </select>
                                                    </div>
                                                    <button className='btn'>Submit</button>
                                                </form>



                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}

                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                            </div>
}


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

export default AllParcels;

