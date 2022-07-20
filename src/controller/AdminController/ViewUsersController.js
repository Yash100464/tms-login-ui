import React,{useState,useEffect} from 'react';
import axios  from "axios";
//import ViewUsers from '../../Admin/ViewUsers';
import TableRecord from '../../view/Admin/TableRecord';
import { axiosPrivate } from '../../view/Api/AxiosConfig';
import TableRecordUsers from '../../view/Admin/TableRecordUsers';



const ViewUsersController=()=>{



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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {details.map((detail,i) =>

                              <TableRecordUsers userId={detail.userId} firstName={detail.userFirstName} lastName={detail.userLastName} userName={detail.userName} role={detail.role[0]?.roleId}/>

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



export default ViewUsersController;