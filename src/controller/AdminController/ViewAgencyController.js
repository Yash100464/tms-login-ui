import React,{useState,useEffect} from 'react';
import axios  from "axios";
//import ViewUsers from '../../Admin/ViewUsers';
import TableRecord from '../../view/Admin/TableRecord';
import { axiosPrivate } from '../../view/Api/AxiosConfig';



const ViewAgencyController=()=>{

    // const url = "http://localhost:8081/agencies";

    // const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MTQxMDk4LCJpYXQiOjE2NTgxMjMwOTh9.kb-59c7Z-su0gsokuzS28ACEyHzaJVlbFiAmZJA6dAtiO2nwDfKxZOin7CvJW7DlO3HuZcwCk8OiQePT8UiUag";
    // const config = {
    //     headers: {
    //       Authorization: `Bearer ${token1}`,
    //     },
    //   };
    //   const [details,setDetails]=useState([]);
    //   const fetchDetails = async() => {
    //     const {data} = await axios.get(url,config);
    //     console.log("TMS Agency: ",data);
    //     setDetails(data);
    //   };

    // useEffect(() => {
    // fetchDetails()
    // }, []);




    const [details,setDetails]=useState([]);

    const fetchDetails = async() => {

      // const {data} = await axios.get(url,config);

      // console.log("TMS Agency: ",data);

      // setDetails(data);



      // console.log("anything");

      const {data} = await axiosPrivate.get("/agencies");

      console.log("TMS Agency: ",data);

      setDetails(data);



    };



  useEffect(() => {

  fetchDetails()

  }, []);

    return(
        // <div>
        // {details.map((detail,i) =>

        //     <ViewUsers detail={detail}/>

        // )}
        // </div>



        <div>
          <div className="container">
        <div className="row">
            <div className="col-md-offset-1 col-md-10">
                <div className="panel">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col col-sm-3 col-xs-12">
                                <h4 className="title">User <span>List</span></h4>
                            </div>
                            <div className="col-sm-9 col-xs-12 text-right">
                                <div className="btn_group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    {/* <button className="btn btn-default" title="Reload"><i className="fa fa-sync-alt"></i></button>
                                    <button className="btn btn-default" title="Pdf"><i className="fa fa-file-pdf"></i></button>
                                    <button className="btn btn-default" title="Excel"><i className="fas fa-file-excel"></i></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Agency Name</th>
                                    <th>Agency Total Earning</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {details.map((detail,i) =>

                              <TableRecord userId={detail.userId} firstName={detail.userFirstName} lastName={detail.userLastName} userName={detail.userName} role={detail.role[0]?.roleId} agencyName={detail.agency?.name} agencyEarning={detail.agency?.totalEarnings}/>

                            )}

                                </table>
                                </div>
                                </div>
                                </div>
                                </div>
        </div>

        </div>

    )

}



export default ViewAgencyController;