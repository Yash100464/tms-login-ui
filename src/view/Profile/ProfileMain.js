import React from 'react';
import Profile from './Profile';

const ProfileMain = () => {
    return(
        <div>
            <Profile />
            <Profile fname='Jony' lname='Ive' mail='iveJon@gmail.com' usrId='102'/>
           
        </div>
    )
}

export default ProfileMain;