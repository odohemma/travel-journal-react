import React from "react"
import Header from "./components/Header"
import Place from "./components/Place"
import data from "./data"

export default function App () {
    const places = data.map (place => <Place key = {place.id} {...place} />)   
    
    return (
        <div>
            <Header />
            <section className="places-list">
                {places}
            </section>
        </div>
    )     
}