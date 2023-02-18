import AstonGoogleButton from "../Components/AstonGoogleButton"
import AstonAppleButton from "./AstonAppleButton"
import BarceGoogleButton from "../Components/BarceGoogleButton"
import BarceAppleButton from "./BarceAppleButton"
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (

  <>
 

    <div id="parallaxContainer">
    {/* Uber Eats App */}
    <div style={{marginTop: 300, marginBottom: 120, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 450, height: 350}}>
                <img style={{ marginTop: 50, width: "100%", height: "auto", transition: ".7s", }} src="/images/astonmock.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Uber Eats Clone App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                  <img style={{width: 50, height: 50, }} src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png"  />
                </div>
            <p style={{fontSize: 20,textAlign: 'center', padding: 50}}>A full stack react native app inspired by the UberEats user app. I utilized Aws Amplify's datastore to configure the back-end to query and save customer's orders and used Amazon Cognito for user registration, authentication, & account recovery.</p>

            <div className="astonProject" style={{flexDirection: "row"}}>
                <img style={{width: 50, height: 50}} src="https://expo.dev/accounts/jimpesenti/projects/UberEats/builds/b9dfcb73-dd37-4009-b5f9-7d24a72b937d"/>
                <button style={{marginTop: 40}} type="button" className="codeButton">
                  <a href="https://github.com/JamesPesenti/UberEatsClone" target="_blank" rel="noopener noreferrer">
                    <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                  </a>
                  <p>See Code</p>
                </button>
                <AstonAppleButton  />
            </div>
            
        </div>


     {/* Aston Waikiki App */}
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
                <AstonGoogleButton  />
                <button style={{marginTop: 40}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti/AstonWaikikiBeachApp" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        <p>See Code</p>
                </button>
                <AstonAppleButton  />
            </div>
            
        </div>
    
    {/* Barcelona App */}
       <div style={{marginTop: 20, marginBottom: 120, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 650, height: 300}}>
                <img style={{ marginTop: 30, width: "100%", height: 250, transition: ".7s", }} src="/images/barcelonamockup.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Barcelona Tourist App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -20,}}>
                <img style={{width: 80, height: 50,}} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>I created this React Native app for visitors of Barcelona to save pictures and locations of their favorite places. I used pop-up modals for users to quickly get information on popular sights and used geolocation with google maps so users can save their location or select it on the map.</p>
            
            <div className="astonProject" style={{flexDirection: "row"}}>
               <BarceAppleButton  />
                <button style={{marginTop: 40}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti/BarcelonaApp" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        <p>See Code</p>
                </button>
                <BarceGoogleButton  />
            </div>

        </div>
        
    {/* IAR React App */}
        <div style={{marginBottom: 100, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <img style={{ width: 600, height: 350, borderRadius: 10, borderWidth: 2, borderColor: "green"}} src="/images/innermock.png" />
            <h4 style={{textAlign: 'center'}}>Inner Aura Readings Website</h4>
            <div style={{flexDirection: "row", padding: 10, borderRadius: 10}}>
                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" style={{width: 100, height: 50,}} />
                <img className="logoBox" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" style={{width: 50, height: 50,}} />
            </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>This was the first official React web app that I developed. I made it for a friend who wanted to reach more customers with a mobile friendly website. I made multiple improvements and converted it into a PWA for offline operability and mobile app performance. </p>
            <button style={{marginTop: 40}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti/InnerAuraReadings2022" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        <p>See Code</p>
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
            <button style={{marginTop: 40}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti/RealEstateApp" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        <p>See Code</p>
            </button>
        </div>
    </div>

       
    </>
  )
}

export default MyProjects