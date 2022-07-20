import React,{useState,useEffect} from 'react';
import axios  from "axios";
import { axiosPrivate } from '../../view/Api/AxiosConfig';
import Profile from '../../view/Profile/UserProfile';
import UserProfile from '../../view/Profile/UserProfile';



const UserProfileController=()=>{



    const [details,setDetails]=useState([]);

    const fetchDetails = async() => {


      const {data} = await axiosPrivate.get("/users");

      console.log("TMS Agency: ",data);

      setDetails(data);



    };



  useEffect(() => {

  fetchDetails()

  }, []);

    return(
        <div>
        {details.map((detail,i) =>

            <UserProfile detail={detail}/>

        )}
        </div>
    )

}



export default UserProfileController;