import React from "react"
import Navbar from "./components/Navbar"
import Maincontent from "./components/Maincontent"
import data from "./data"

export default function App() {
    
    const mainSection = data.map(item =>{
        return (
            <Maincontent 
              key={item.id}
              item={item}
            />
        )
    })
    
    return (
        <div className="container">
        <Navbar />
        {mainSection}
        </div>
    )
}