import React,{useState,useEffect} from 'react';
import axios  from "axios";
//import ViewUsers from '../../Admin/ViewUsers';
// import TableRecord from '../../view/Admin/TableRecord';
import { axiosPrivate } from '../../view/Api/AxiosConfig';
import Card from '../../view/Card/Card';
import ViewBookings from '../../view/Booking/ViewBookings';



const UsersBookingHistoryController=()=>{
    const [details,setDetails]=useState([]);
    const fetchDetails = async() => {
      const {data} = await axiosPrivate.get("/BookingHistory");
      console.log("TMS Booking History: ",data);
      setDetails(data);
    };



  useEffect(() => {

  fetchDetails()

  }, []);

    return(
        <section>
            <div class="container">
                <div class="row">
        {details.map((detail,i) =>

            <ViewBookings detail={detail}/>

        )}
        </div>
        </div>
        </section>
    )

}



export default UsersBookingHistoryController;