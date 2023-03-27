import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
        
        <div style={{justifyContent: "center", textAlign: "center", color: "white", padding: 50,}}>
            <img style={{padding: 10, borderRadius: "50%", width: 200, height: 200,}} src="/images/IMG_1619.jpg" className="App-logo" alt="logo" />
            <h1>I'm James Pesenti</h1>
            <h2>a Software Developer building mobile apps and websites</h2>
              <FaMapPin size={20} style={{position: "relative", top: 5, right: 65, }} />
              <h3 style={{marginTop: -24}}> Chicago, IL</h3>
        </div>
  
</>
  )
}

export default AboutMe