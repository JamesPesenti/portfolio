import GoogleButton from "../Components/GoogleButton"
import AppleButton from "./AppleButton"
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (
<>
 
      
  {/* Aston Waikiki */}
    <div id="parallaxContainer">
     
       <div style={{marginTop: 300, marginBottom: 120, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 450, height: 350}}>
                <img style={{ marginTop: 50, width: "100%", height: "auto", transition: ".7s", }} src="/images/astonmock.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Aston Waikiki Hotel App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                </div>
            <p style={{fontSize: 20,textAlign: 'center', padding: 50}}>A React Native app I created to reimagine the hotel Aston Waikiki Beach's website into a cross platform mobile app. I used most of the content and images from the current website and utilized both Bottom Tabs, Drawer navigation and other React Native dependencies for a better UX.</p>

            <div className="astonProject" style={{flexDirection: "row"}}>
                <GoogleButton  />
                <button style={{marginTop: 40}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={55} style={{ justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        
                </button>
                <p>See Code</p>
                <AppleButton  />
            </div>
            
        </div>
    
    {/*Barcelona  */}
       <div style={{marginTop: 300, marginBottom: 120, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 650, height: 300}}>
                <img style={{ marginTop: 30, width: "100%", height: 250, transition: ".7s", }} src="/images/barcelonamockup.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Barcelona Tourist App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -20,}}>
                <img style={{width: 80, height: 50,}} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>I created this React Native app for visitors of Barcelona to save pictures and locations of their favorite places. I used pop-up modals for users to quickly get information on popular sights and used geolocation with google maps so users can save their location or select it on the map.</p>
            <GoogleButton style={{position: "center", marginLeft: -220 }} />
            <button type="button" className="button" style={{position: "center", marginLeft: -70}}>
                <a target="_blank" href=" https://github.com/JamesPesenti/BarcelonaApp">
                  See Code
                </a>
            </button>
            <AppleButton style={{position: "center", marginLeft: 220,}} />
        </div>

        
    {/* IAR */}
        <div style={{marginBottom: 100, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <img style={{ width: 600, height: 350, borderRadius: 10, borderWidth: 2, borderColor: "green"}} src="/images/innermock.png" />
            <h4 style={{textAlign: 'center'}}>Inner Aura Readings Website</h4>
            <div style={{flexDirection: "row", padding: 10, borderRadius: 10}}>
                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" style={{width: 100, height: 50,}} />
                <img className="logoBox" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" style={{width: 50, height: 50,}} />
            </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>This was the first official React web app that I developed. I made it for a friend who wanted to reach more customers with a mobile friendly website. I made multiple improvements and converted it into a PWA for offline operability and mobile app performance. </p>
            <button type="button" className="button" style={{position: "center", marginLeft: -70,}}>
                <a target="_blank" href="https://github.com/JamesPesenti/InnerAuraReadings2022">
                  See Code
                </a>
            </button>
        </div>


{/* REapp */}
        <div style={{marginBottom: 100, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10,}} className="box">
        <img style={{marginTop: 50, width: 800, height: 350, borderRadius: 10, borderWidth: 2, borderColor: "green"}} src="/images/remockup.png" />
            <h4 style={{textAlign: 'center'}}>Real Estate Listing Website </h4>
            <div style={{flexDirection: "row", padding: 10, borderRadius: 10}}>
                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" style={{width: 100, height: 50,}} />
                <img src="https://img.icons8.com/color/480/cloud-firestore.png" style={{width: 50, height: 50,}} />
                <img src="https://raw.githubusercontent.com/JamesPesenti/RealEstateApp/16b046b3d34b4a26468627e906dc503be8911b73/src/assets/svg/googleIcon.svg" style={{marginBottom: 8, width: 100, height: 30,}} />
            </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>Real Estate listing website built with React, FireStore database and Google OAuth to sign in with a google account. You can search listings for rent/sale and login to your account to create a listing and save offers. Inspiration and back-end code taken from Brad Traversey's React course I took on Udemy.</p>
            <button type="button" className="button" style={{position: "center", marginLeft: -70,}}>
                <a target="_blank" href="https://github.com/JamesPesenti/RealEstateApp">
                  See Code
                </a>
            </button>
        </div>
    </div>

       
    </>
  )
}

export default MyProjects