import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const {user}= useAuth();
    return (
        <div className='text-center text-3xl mt-20 font-bold'>
        <h2>Hi, Welcome {user.displayName}</h2>
    </div>
    );
};

export default UserHome;