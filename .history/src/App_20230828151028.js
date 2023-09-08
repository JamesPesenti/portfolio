import React from 'react';
import logo from './logo.svg';
import './CSS/App.css';
// import "./CSS/index.css"
import Navbar from "./Components/Navbar"
import AboutMe from "./Components/AboutMe"
import Scroll from "./Components/Scroll"
import MyProjects from "./Components/MyProjects"

function App() {
    return (
    <>
      <div className="sidenav">
        <AboutMe />
        <Navbar />
      </div>
      <div style={{justifyContent: 'center', position: 'center', marginTop: 200}}>
        <Scroll />
      </div>
      <div style={{marginBottom: 0}} >
        <MyProjects />
      </div>
      <div id="thanks">
        <div>
          <h2>Thanks!</h2>
          <p><a href="" target="_parent">&lt; Back To Top</a></p>
        </div>
      </div>
    </>
    );
}

export default App;
