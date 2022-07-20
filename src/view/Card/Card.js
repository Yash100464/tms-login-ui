/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {FaCalendarAlt, FaCreditCard, FaEnvelope,FaHotel,FaInfoCircle,FaMapMarkedAlt,FaMoneyCheckAlt,FaPhone, FaPlaneArrival, FaPlaneDeparture} from "react-icons/fa";
import {BiRupee} from "react-icons/bi";
 const Card = ({detail,imgLink="https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}) => {
    return(
        <div class="col-md-4 mt-4">
        <div class="card profile-card-5">
            <div class="card-img-block">
                <img class="card-img-top" src={imgLink} alt="Card image cap"/>
            </div>
            <div class="card-body pt-0">
            <h5 class="card-title">{detail.packageName}</h5>
            <p class="card-text"><FaPlaneDeparture/><b className='px-2'>Source :</b> {detail.source}</p>
            <p class="card-text"><FaPlaneArrival/><b className='px-2'>Destination :</b> {detail.destination}</p>
            <p class="card-text"><FaCalendarAlt/><b className='px-2'>Start Date :</b> {detail.startDate}</p>
            <p class="card-text"><FaCalendarAlt/><b className='px-2'>End Date :</b> {detail.endDate}</p>
            <p class="card-text"><FaHotel/> <b className='px-2'>Hotel :</b> {detail.hotel}</p>
            <p class="card-text"><FaInfoCircle/><b className='px-2'>Details :</b> {detail.details}</p>
            <p class="card-text"><FaMoneyCheckAlt/> <b className='px-2'>Cost :</b> <BiRupee size="15px"/>{detail.cost}</p>
            
            <button type="button" className="btn btn-primary">Book Now</button>
        

          </div>
        </div>
        {/* <p class="mt-3 w-100 float-left text-center"><strong>Card with Floting Picture</strong></p> */}
    </div>
    )
 }

 export default Card;

