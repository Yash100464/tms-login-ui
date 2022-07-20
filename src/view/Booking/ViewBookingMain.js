import React from "react";
import ViewBookings from "./ViewBookings";
import ViewHotelBookings from "./ViewHotelBookings";

const ViewBookingMain=()=>(
    <div>
        <ViewBookings imgCard="https://th.bing.com/th/id/OIP.ouzr10-SMvtFmYKtoVKzmwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Darjeeling" prize="20000.00" description="3D/2N"/>                          
        <ViewBookings imgCard="https://th.bing.com/th/id/OIP.Xzp5t4a93ffPJlZAQgvWdgHaD4?w=329&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Maldives" prize="15000.00" description="2D/1N"/>
        <ViewBookings imgCard="https://th.bing.com/th/id/OIP.CaCO2JsOlLDlfjCkoNQKhgHaE8?w=279&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Goa" prize="25000.00" description="3D/2N"/>
        <ViewHotelBookings imgCard="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" destination="Dargling" prize="20000.00" description="3D/2N"/>
        <ViewHotelBookings imgCard="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" destination="Maldives" prize="15000.00" description="2D/1N"/>
        <ViewHotelBookings imgCard="https://th.bing.com/th/id/OIP.sXhOHzmYy0q97BCrnwGwuwHaEK?w=333&h=170&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Goa" prize="25000.00" description="3D/2N"/>
    </div>

)

export default ViewBookingMain