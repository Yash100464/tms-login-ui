import React from 'react';
import "./ViewBookings.css"
const ViewHotelBookings=({imgCard="https://via.placeholder.com/194x228/87CEFA" , destination="Travel" , prize="0.00" ,description=""})=>(
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
						<h5 className="name">
							<a href="/#">
								{destination} <span>details</span>
							</a>
						</h5>
						<p className="price-container">
							<span>{prize}</span>
						</p>
						<span className="tag1"></span> 
				</div>
				<div className="description">
					<p>{description} </p>
				</div>
				<div className="product-info smart-form">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-6"> 
							<a href="/#" className="btn btn-success">Cancel</a>
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

export default ViewHotelBookings;