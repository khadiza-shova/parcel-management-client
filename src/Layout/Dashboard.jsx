import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import useAdmin from '../Hooks/useAdmin';
import useUser from '../Hooks/useUser';
import useDeliveryMen from '../Hooks/useDeliveryMen';


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isUser]= useUser();
    const [isDeliveryMen]= useDeliveryMen();

    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
                </button>

                <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                       {
                        isUser &&  
                        <>
                            <Link to="bookParcels">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <BiSolidFoodMenu></BiSolidFoodMenu>
                            <span class="flex-1 ms-3 whitespace-nowrap">Book A Parcels</span>
                            </a>
                        </li>
                        </Link>
                         <Link to="myParcles">
                         <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <MdProductionQuantityLimits></MdProductionQuantityLimits>
                               <span class="flex-1 ms-3 whitespace-nowrap">My Parcels</span>
                               </a>
                           </li>
                           </Link>
                           <Link to="userprofile">
                           <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <CgProfile></CgProfile>
                               <span class="flex-1 ms-3 whitespace-nowrap">My Profile</span>
                               </a>
                           </li>
                           </Link>
                          <Link to="/">
                          <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <AiFillHome></AiFillHome>
                               <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
                               </a>
                           </li>
                          </Link>
                              
                        </>
                        
                       
                       } 
                         {
                        isAdmin &&  
                        <>
                            
                            <Link to="allParcles">  
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <BiSolidFoodMenu></BiSolidFoodMenu>
                            <span class="flex-1 ms-3 whitespace-nowrap">All Parcels</span>
                            </a>
                        </li>
                         </Link>
                       
                         <Link to="allDeliveryMen">
                         <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <MdProductionQuantityLimits></MdProductionQuantityLimits>
                               <span class="flex-1 ms-3 whitespace-nowrap">All Delivery Men</span>
                               </a>
                           </li>
                           </Link>
                           <Link to="allUser">
                           <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <CgProfile></CgProfile>
                               <span class="flex-1 ms-3 whitespace-nowrap">All Users</span>
                               </a>
                           </li>
                           </Link>
                           <Link to="statistic">
                           <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <CgProfile></CgProfile>
                               <span class="flex-1 ms-3 whitespace-nowrap">Statistic</span>
                               </a>
                           </li>
                           </Link>
                          <Link to="/">
                          <li>
                               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <AiFillHome></AiFillHome>
                               <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
                               </a>
                           </li>
                          </Link>
                              
                        </>
                        
                       
                       } 
                   
                       {
                        isDeliveryMen && 
                        <>
                            
                        <Link to="myDeliveryList">  
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <BiSolidFoodMenu></BiSolidFoodMenu>
                        <span class="flex-1 ms-3 whitespace-nowrap">My Delivery List</span>
                        </a>
                    </li>
                     </Link>
                   
                     <Link to="myReviews">
                     <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <MdProductionQuantityLimits></MdProductionQuantityLimits>
                           <span class="flex-1 ms-3 whitespace-nowrap">My Reviews</span>
                           </a>
                       </li>
                       </Link>
                      
                      <Link to="/">
                      <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <AiFillHome></AiFillHome>
                           <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
                           </a>
                       </li>
                      </Link>
                          
                    </>
                       }

                 
                    </ul>
                </div>
                </aside>

              

            </div>
            {/* Dashboard Content  */}
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;