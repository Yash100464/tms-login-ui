import React from 'react';


// import Courosel from './view/Dashboard/Courosel';
import ForgotPwd from "./view/ForgotPwd/ForgotPwd";
import Login from "./view/Login/Login";
import Register from "./view/Register/Register";
import Profile from './view/Profile/UserProfile';
// import ProfileMain from './view/Profile/ProfileMain';
// import viewBookingMain from './view/Booking/viewBookingMain';
import Dashboard from './view/Dashboard/Dashboard';
import ViewBookingMain from './view/Booking/ViewBookingMain';
import PackageCard from "./view/Card/PackageCard";
import ViewHotelMain from './view/Booking/ViewHotelMain';
import AdminDashboard from './view/Dashboard/AdminDashboard';
import ViewUsers from './view/Admin/ViewUsers';
import ViewAgencies from './view/Admin/ViewAgencies';
import AgentDashboard from './view/Dashboard/AgentDashboard';
import AddPackage from './view/Agent/AddPackage';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';
import ViewAgencyController from './controller/AdminController/ViewAgencyController';
import ViewBookingsController from './controller/CommonController/ViewPackageController';
import ViewBookings from './view/Booking/ViewBookings';
import ViewPackageController from './controller/CommonController/ViewPackageController';
import BookingHistoryController from './controller/AdminController/AdminBookingHistoryController';
import ViewUsersController from './controller/AdminController/ViewUsersController';
import UserProfile from './view/Profile/UserProfile';
import UserProfileController from './controller/UserController/UserProfileController';
import AdminBookingHistoryController from './controller/AdminController/AdminBookingHistoryController';
import UsersBookingHistoryController from './controller/UserController/UsersBookingHistoryController';
import AgencyBookingHistoryController from './controller/AgencyController/AgentBookingHistoryController';
import ViewAddedPackageController from './controller/AgencyController/ViewAddedPackageController';





const App=() => {
  return (
    <div>
      {/* <Login/>  */}
      {/* <Register/> */}
      {/* <ForgotPwd/> */}
      {/* <Dashboard userName='Craig'/> */}
      {/* <PackageCard/> */}
      {/* <ProfileMain/> */}
      <Router>
        <Routes>

          {/* USER DASHBOARD ROUTES */}
          {/* <Route path="/" element={<Dashboard/>}>
              <Route path="/uviewbooking" element={<UsersBookingHistoryController/>}/>
              <Route path="/ubookpackage" element={<ViewPackageController/>}/>
              <Route path="/uprofile" element={<UserProfileController/>}/>
              <Route path="/uviewhotel" element={<ViewHotelMain/>}/>
              
          </Route>
           */}


           {/* ADMIN DASHBOARD ROUTES */}
        {/* <Route path='/' element={<AdminDashboard userName='admin'/>}>
            <Route path='/bookpackage' element={<ViewPackageController/>} />
            <Route path='/viewbooking' element={<AdminBookingHistoryController/>} />
            <Route path='/viewusers' element={<ViewUsersController/>} />
            <Route path='/viewagencies' element={<ViewAgencyController/>} /> 
        </Route> */}


        {/* AGENT DASHBOARD */}
        <Route path='/' element={<AgentDashboard userName='agent'/>}>
            {/* <Route path='/abookpackage' element={<ViewPackageController/>} /> */}
            {/* <Route path='/aviewbooking' element={<AgencyBookingHistoryController/>} /> */}
            <Route path='/aaddpackage' element={<AddPackage/>} />
            <Route path ='/aviewaddedpackage' element={<ViewAddedPackageController/>}/>
        </Route>

          {/* OTHER ROUTES */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgetpassword" element={<ForgotPwd/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>

      {/* <Courosel/> */}
    </div>
  )
}

export default App;
