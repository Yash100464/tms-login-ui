import React from 'react';

import "./Profile.css";
import pic1 from "./profilePic.svg";

const UserProfile = ({detail}) => {
    return(
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={pic1} alt="profile pic"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h4>
                                        {detail.userFirstName} {detail.userLastName}
                                    </h4>
                                    <h6>
                                        <strong>Verified</strong>
                                    </h6>
                                   
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label> <b> User Id</b></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{detail.userId}</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><strong>First Name</strong></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{detail.userFirstName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><strong>Last Name</strong></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{detail.userLastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><b>Email</b></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{detail.userName}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label><b>Password</b></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>********</p>
                                            </div>
                                        </div> */}
                                       
                            </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">  
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
}

export default UserProfile;

// userFirstName: "user"
// userId: 1
// userLastName: "abc"
// userName: "ggg@gmail.com"