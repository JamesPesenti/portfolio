import React, {Component} from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import Pdf from "../Components/JamesPesentiResume2022.pdf"


const Navbar = () => {
  return (
    <>
          <div className="navbar flex">
            <div className="container">
                <nav>
                  <ul style={{textAlign: "center", marginTop: 70, position: 'relative', left: 0, top: -2}}>
                    <li>
                      <a className="App-link"  href="mailto:jamespesenti91@gmail.com" target="_blank" rel="noopener noreferrer">
                      <FaEnvelope size={35} style={{display: "flex", textAlign: "center", marginLeft: 10}}/>
                          Contact
                      </a>
                    </li>
                    <li>
                      <a className="App-link" href="https://github.com/JamesPesenti" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={35} style={{display: "flex", textAlign: "center", marginLeft: 10}} />
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a className="App-link" href={Pdf} target="_blank" rel="noopener noreferrer">
                        <FaFile size={35} style={{display: "flex", textAlign: "center", marginLeft: 10}} />
                        Resume
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* <h4 style={{color: "white", textAlign: 'center', marginBottom:-440}}>
                  See my work below and send a message to get in touch
                </h4> */}
            </div>
          </div>
    </>
  )
}

export default Navbar