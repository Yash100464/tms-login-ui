import React from 'react';
import { FaCalendarAlt, FaHotel, FaInfoCircle, FaMoneyCheckAlt, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import {ImLocation2 } from 'react-icons/im';
import {BiRupee } from 'react-icons/bi';
import "./ViewBookings.css"
const ViewBookings=({imgCard="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" , detail})=>(
    <div class="container">
<div class="col-xs-12 col-md-6 bootstrap snippets bootdeys"></div>
    <div className="product-content product-wrap clearfix">
		<div className="row">
				<div className="col-md-5 col-sm-12 col-xs-12">
					<div className="product-image"> 
						<img src={imgCard} alt="194x228" className="img-responsive"/> 
						{/* <span className="tag2 hot">
							HOT
						</span>  */}
					</div>
				</div>
				<div className="col-md-7 col-sm-12 col-xs-12">
				<div className="product-deatil">
				<p className="price-container">
							<span>{detail.packageName}</span>
							
							
						</p>
						<h5 className="name">
							<a href="/#">
							<p class="card-text"><ImLocation2/><b className='px-1'></b>{detail.destination}</p>

							</a>
						</h5>
						<span className="tag1"></span> 
				</div>
				<div className="description">
				<p class="card-text"><FaPlaneDeparture/><b className='px-2'>Source :</b> {detail.source}</p>
            <p class="card-text"><FaPlaneArrival/><b className='px-2'>Destination :</b> {detail.destination}</p>
            <p class="card-text"><FaCalendarAlt/><b className='px-2'>Start Date :</b> {detail.startDate}</p>
            <p class="card-text"><FaCalendarAlt/><b className='px-2'>End Date :</b> {detail.endDate}</p>
            <p class="card-text"><FaHotel/> <b className='px-2'>Hotel :</b> {detail.hotel}</p>
            <p class="card-text"><FaInfoCircle/><b className='px-2'>Details :</b> {detail.details}</p>
            <p class="card-text"><FaMoneyCheckAlt/> <b className='px-2'>Cost :</b><BiRupee size="23px"/> {detail.cost} Rs</p>
				</div>
				<div className="product-info smart-form">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-6"> 
							<a href="/#" className="btn btn-danger " >Cancel</a>
						</div>
						{/* <div className="col-md-6 col-sm-6 col-xs-6">
							<div className="rating">
								<label for="stars-rating-5"><i className="fa fa-star"></i></label>
								<label for="stars-rating-4"><i className="fa fa-star"></i></label>
								<label for="stars-rating-3"><i className="fa fa-star text-primary"></i></label>
								<label for="stars-rating-2"><i className="fa fa-star text-primary"></i></label>
								<label for="stars-rating-1"><i className="fa fa-star text-primary"></i></label>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
)

export default ViewBookings;


// cost: 2050
// destination: "Mumbai"
// details: "Our Bonanza package"
// endDate: "2022-07-03T11:04:37.000+00:00"
// hotel: "ITC Sonar"
// packageId: 1
// packageName: "D Package"
// source: "Hyderabad"
// startDate: "3921-07-27T18:30:00.000+00:00"