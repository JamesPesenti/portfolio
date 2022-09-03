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
      <div style={{justifyContent: 'center', position: 'center'}}>
        <Scroll />
      </div>
      <div className="parallax">
        <MyProjects />
      </div>
      <div id="thanks">
        <div>
          <h2>Thanks!</h2>
          <p><a href="" target="_parent">&lt; Back To Top</a></p>
        </div>
      </div>





{/* <section class="parallax-group the-office">
  <div class="parallax-layer background">
    <div class="background-container">
      <div class="background-artwork"></div>
    </div>
    <div class="content">
      <h3>Watch all 9 seasons of <em>The Office</em> four times through.</h3>
    </div>
  </div>
</section>
<section class="parallax-group pieces the-office-pieces">
  <div class="parallax-layer foreground layer-1">
    <img src="/images/the-office-jello.svg" width="237" height="148" alt="phone1" class="jello" />
  </div>
  <div class="parallax-layer foreground layer-2">
    <img src="/images/paper-airplane.svg" width="173" height="215" alt="phone2" class="airplane" />
  </div>
  <div class="parallax-layer foreground layer-3">
    <img src="/images/the-office-mug.svg" width="160" height="145" alt="phone3" class="mug" />
  </div>
  <div class="parallax-layer foreground layer-2">
    <img src="/images/the-office-beet.svg" width="200" height="274" alt="phone4" class="beet" />
  </div>
</section>
<section class="parallax-group space-mountain">
</section> */}
    </>
    );
}

export default App;