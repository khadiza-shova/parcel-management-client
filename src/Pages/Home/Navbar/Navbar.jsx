import React, { useContext } from 'react';
import logoImage from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import useUser from '../../../Hooks/useUser';
import useDeliveryMen from '../../../Hooks/useDeliveryMen';

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isUser] = useUser();

    const [isDeliveryMen] = useDeliveryMen();


    const handleLogout = () => {
        logOut();
    }

    const navItem = <>

        <NavLink to="/"><li className='text-base font-semibold'><a>Home</a></li></NavLink>
       

        {
            isAdmin && <NavLink to="dashboard/statistic"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

        }
        {
            isUser && <NavLink to="dashboard/userHome"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

        }
        {
            isDeliveryMen && <NavLink to="dashboard/deliveryHome"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

        }



        <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button>
        {
            user?.email ? <div className=" dropdown dropdown-end">
                <div className="ml-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Photo" src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] space-y-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><a>{user.displayName}</a></li>
                        {
                            isAdmin && <NavLink to="dashboard/statistic"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

                        }
                        {
                            isUser && <NavLink to="dashboard/userHome"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

                        }
                        {
                            isDeliveryMen && <NavLink to="dashboard/deliveryHome"><li className='text-base font-semibold'><a>Dashboard</a></li></NavLink>

                        }
                        
                        <li onClick={handleLogout}><a>Logout</a></li>


                    </ul>
                </div>

            </div>
                :
                <NavLink to="/login"><li className='text-base font-semibold'><a>Login</a></li></NavLink>
        }


    </>
    return (
        <div className=' shadow-lg '>
            <div className="navbar  root">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem
                            }
                        </ul>
                    </div>

                    <img className='w-36' src={logoImage} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItem
                        }
                    </ul>
                </div>

             



            </div>
        </div>
    );
};

export default Navbar;