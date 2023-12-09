import React from 'react';
import BannerImage from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className=" bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold uppercase">Organic Freash Fruits</h1>

                    <form>
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-green-50 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-green-400 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                    <button className="btn bg-green-400 mt-10 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;