import React,{useState,useEffect} from 'react';
import axios  from "axios";
//import ViewUsers from '../../Admin/ViewUsers';
// import TableRecord from '../../view/Admin/TableRecord';
import { axiosPrivate } from '../../view/Api/AgencyConfig';
import Card from '../../view/Card/Card';



const ViewPackageController=()=>{
    const [details,setDetails]=useState([]);
    const fetchDetails = async() => {
      const {data} = await axiosPrivate.get("/agency/packages");
      console.log("TMS Agency: ",data);
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

            <Card detail={detail}/>

        )}
        </div>
        </div>
        </section>
    )

}



export default ViewPackageController;