import React from "react"

export default function Place(props) {
    return (
        <div>
            <div className = "picture-note">
                <div className = "picture-wrapper">
                    <img src = {`${props.imageUrl}`} className = "picture"/>
                </div>
                <div className = "pic-remarks">
                    <div>
                        <span className = "location-icon"><img src = "../images/Location-Icon-220.png"/></span>
                        <span className="country">{props.location}</span>
                        <span className="google-maps-url"><a href={`${props.googleMapsUrl}`}>View on Google Maps</a></span>
                    </div>
                    <div className = "location">{props.title}</div>
                    <div className = "date"><b>{props.startDate} - {props.endDate}</b></div>
                    <div className = "description">{props.description}</div>
                </div>
            </div>
            <div className = "place-underline">                
            </div>
            
        </div>
    )
}