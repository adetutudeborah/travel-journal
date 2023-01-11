import React from "react"


export default function(props) {
    return (
    <div className="travel-details">
        
        <div>
        <img src={props.item.imageUrl} alt="location-img" className="location-image" />
        </div>
        
        <div className="travel-content">
        
        <span className="travel-location">
        <i className="fa-solid fa-location-dot location-dot"></i> 
         <span className="location">{props.item.location}</span>
        <a href={props.item.googleMapsUrl} className="google-map">View on Google Maps </a>
        </span>
        
        <h1 className="title">{props.item.title}</h1>
        <h3 className="date">{props.item.startDate} - {props.item.endDate}</h3>
        <h4 className="description">{props.item.description}</h4>
        </div>
    </div>
    )
}