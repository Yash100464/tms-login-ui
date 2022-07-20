import React from "react";
import "./Dashboard.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import PackageCard from "../Card/PackageCard";
// import ProfileMain from "../Profile/ProfileMain";
// import Profile from "../Profile/Profile";
// import UserTable from "../Admin/UserTable";
// import ViewBookings from "../Booking/ViewBookings";
// import ViewHotelBookings from "../Booking/ViewHotelBookings";
// import { OutlinedInput } from "@mui/material";
// import user from './undraw_profile_2.svg';
import { SiYourtraveldottv } from "react-icons/si";
import { RiUserSearchLine ,RiHistoryLine} from "react-icons/ri";
import {FaUsers} from "react-icons/fa"
import {Link,Outlet} from 'react-router-dom';
import {MdCardTravel,MdOutlineLocationCity,MdSpaceDashboard} from "react-icons/md";
import {IoIosBusiness}  from "react-icons/io";
const AdminDashboard = ({userName="user"}) => (
    <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className=""><SiYourtraveldottv/></i>
                    {/* <img src="../Dashboard/tmslogo.svg" alt=""></img> */}
                </div>
                <div className="sidebar-brand-text mx-3">BooK My TriP </div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className=""><MdSpaceDashboard size="17px"/></i>
                    <span>Dashboard</span></Link>
            </li>



            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                ACTIONS
            </div>



            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/bookpackage">
                    <i className=""><MdCardTravel size="17px"/></i>
                    <span>Book Package</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/bookhotel">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Book Hotel</span></Link>
            </li> */}

            <li className="nav-item">
                <Link className="nav-link" to="/viewbooking">
                    <i className=""><RiHistoryLine size="17px"/></i>
                    <span>Booking History</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>

            <div className="sidebar-heading">
                {/* TMS */}
            </div>


            <li className="nav-item">
                <Link className="nav-link" replace to="/viewusers">
                    <i className=""><FaUsers size="17px"/></i>
                    <span>View Users</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/viewagencies">
                    <i className=""><IoIosBusiness size="17px"/></i>
                    <span>View Agencies</span></Link>
            </li>





        </ul>

        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Search --> */}
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"></input>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <SearchIcon />
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Topbar Navbar --> */}
                    <ul class="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="/#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"></input>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Alerts --> */}
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <NotificationsIcon />
                                {/* <!-- Counter - Alerts --> */}
                                
                            </a>
                            {/* <!-- Dropdown - Alerts --> */}
                            {/* <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="/#">Show All Alerts</a>
                            </div> */}
                        </li>

                        {/* {/* <!-- Nav Item - Messages --> 
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                {/* <!-- Counter - Messages --> *
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            {/* <!-- Dropdown - Messages --> *
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="..."></img>
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="..."></img>
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="..."></img>
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="/#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="..."></img>
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="/#">Read More Messages</a>
                            </div>
                        </li> */}

                        <div class="topbar-divider d-none d-sm-block"></div>
                        

                        {/* <!-- Nav Item - User Information --> */}
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{userName}</span>
                                <img class="img-profile rounded-circle" src="https://raw.githubusercontent.com/NithishKumarSOfficial/webpro/1d868a87bc57b21d2858f1844e66a2c8726104ba/undraw_profile_2.svg" alt="hi"></img>
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <Link class="dropdown-item" to="/profile">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </Link>
                                {/* <a class="dropdown-item" href="/#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="/#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a> */}
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" replace to="/login" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Link>
                            </div>
                        </li>

                    </ul>

                </nav>

              {/* ADD Additional BODY Components here  */}


            <Outlet/>

              {/* Profile  */}
            {/* <div className="container-fluid">
                <h3>Profile Card</h3>
                <Profile/>
            </div> */}

            {/* BREAKKKKK */}
            {/* <div className="container-fluid">
                <br />
                <br /><br />
            </div> */}


            {/* Packages Cards */}
            {/* <div className="container-fluid">
                <h3>Package Cards</h3>
                <PackageCard/>
            </div> */}

            {/* BREAKKKKK */}
            {/* <div className="container-fluid">
                <br />
                <br /><br />
            </div> */}


            {/* Admin View - View Users */}
            {/* <div className="container-fluid">
                <h3>Admin View - View Users</h3>
                <UserTable/>
            </div> */}

            {/* BREAKKKKK */}
            {/* <div className="container-fluid">
                <br />
                <br /><br />
            </div> */}

            {/* Package Booking History */}
            {/* <div className="container-fluid">
                <h3>Package Booking History</h3>
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.ouzr10-SMvtFmYKtoVKzmwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Darjeeling" prize="20000.00" description="3D/2N"/>                          
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.Xzp5t4a93ffPJlZAQgvWdgHaD4?w=329&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Maldives" prize="15000.00" description="2D/1N"/>
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.CaCO2JsOlLDlfjCkoNQKhgHaE8?w=279&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Goa" prize="25000.00" description="3D/2N"/>
            </div> */}

            {/* BREAKKKKK */}
            {/* <div className="container-fluid">
                <br />
                <br /><br />
            </div> */}


            {/* Hotel Booking History */}
            {/* <div className="container-fluid">
                <h3>Hotel Booking History</h3>
                <ViewHotelBookings imgCard="https://th.bing.com/th/id/OIP.enzrtUDLIL_ekumtpGHt1wHaFz?w=244&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Dargling" prize="20000.00" description="3D/2N"/>
                <ViewHotelBookings imgCard="https://th.bing.com/th/id/OIP.g4amOJSM9P5CabWkEA-p5wHaEK?pid=ImgDet&rs=1" destination="Maldives" prize="15000.00" description="2D/1N"/>
                <ViewHotelBookings imgCard="https://th.bing.com/th/id/OIP.sXhOHzmYy0q97BCrnwGwuwHaEK?w=333&h=170&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Goa" prize="25000.00" description="3D/2N"/>
            </div>  */}


            </div>
        </div>

    </div>

);
export default AdminDashboard;