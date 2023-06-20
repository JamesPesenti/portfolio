import UberGoogleButton from "../Components/UberGoogleButton"
import AstonGoogleButton from "./AstonGoogleButton"
import AstonAppleButton from "./AstonAppleButton"
import BarceGoogleButton from "../Components/BarceGoogleButton"
import BarceAppleButton from "./BarceAppleButton"
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (

  <>
    <div id="parallaxContainer">

    {/* Airbnb Clone */}
    <div style={{ justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div>
                <img style={{ borderRadius: 10, marginTop: 50, marginBottom: -35, width: "48%", height: 350, transition: ".7s", }} src="images/mockrocket-capture (11).png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Airbnb Clone App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: 40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                  {/* <img style={{width: 50, height: 50, }} src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png"  /> */}
                </div>
           <div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50, marginBottom: -60}}>I created a mobile app clone of the popular Airbnb platform using React Native. Currently, the project includes a functional UI that mimics the 2022 Airbnb interface, with features such as</p>
            <p style={{fontSize: 20, padding: 0, marginBottom: -20}}>&#8226; Google autocomplete search</p>
            <p style={{fontSize: 20,  padding: 0, marginBottom: -40}}>&#8226; Image carousel with pagination</p>
            <p style={{fontSize: 20, paddingHorizontal: 0, marginBottom: -20}}> &#8226; Google Maps functionality to select an Airbnb on the map based on price.</p>
            <p style={{fontSize: 20, paddingHorizontal: 0, marginBottom: -20}}> &#8226; OpenAI API integration prompting ChatGPT to act as a chatbot for guest property recommendations.</p>

            <p style={{fontSize: 20, textAlign: 'center', padding: 40, marginBottom: -60}}>I plan to add additional features and integrate back end functionality in future updates to enhance the user experience and provide a more comprehensive product.</p>
            <p style={{fontSize: 20, textAlign: 'center', padding: 30, marginBottom: -80}}><b> Key Skills I learned: </b>React Native, UI design, Google Play and App Store submission process, mobile development, UX design, project management.</p>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}><b> Impact: </b> Each project has allowed me to gain experience in mobile development and hone my skills in UI and UX design. It has also provided me with the opportunity to practice project management, by being responsible for planning and executing the project from start to finish, providing me with valuable experience of the mobile app lifecycle.</p>
           </div>

            <div style={{flexDirection: "row"}}>
                {/* <UberGoogleButton  /> */}
                <button style={{marginTop: 10}} type="button" className="codeButton">
                  <a href="https://github.com/JamesPesenti/Airbnb" target="_blank" rel="noopener noreferrer">
                    <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -25, justifyContent: "center", textAlign: "center"}} />     
                  </a>
                  <p>See Code</p>
                </button>
                {/* <AstonAppleButton  /> */}
            </div>
            
        </div>


     {/* Donut Shop App */}
     <div style={{marginTop: 30, marginBottom: 20, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div>
                <img style={{ borderRadius: 10, marginTop: 50, width: "80%", height: 350, transition: ".7s", }} src="/images/appAndDashMock.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Donut Shop App & Dashboard</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                  <img style={{width: 50, height: 50, }} src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png"  />
                </div>
            <p style={{fontSize: 20,textAlign: 'center', padding: 50}}>I built this full stack Donut Shop e-commerce app along with an integratable React.js dashboard for the donut shop to receive a user's order from the app in real time. Users can check out new menu items, order donuts to pick up in store, and sign up for donut rewards.</p>

            <div style={{flexDirection: "row"}}>
                <UberGoogleButton  />
                <button style={{marginTop: 40}} type="button" className="codeButton">
                  <a href="https://github.com/JamesPesenti/Donut_Shop" target="_blank" rel="noopener noreferrer">
                    <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -25, justifyContent: "center", textAlign: "center"}} />     
                  </a>
                  <p>See Code</p>
                </button>
                <AstonAppleButton  />
            </div>
            
        </div>


    {/* Uber Eats App */}
    <div style={{marginTop: 80, marginBottom: 60, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 480, height: 350}}>
                <img style={{ borderRadius: 5, marginTop: 50, width: "100%", height: 300, transition: ".7s", }} src="/images/UberEatsLast.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Uber Eats Clone App</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                  <img style={{width: 50, height: 50, }} src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png" />
                </div>
            <p style={{fontSize: 20,textAlign: 'center', padding: 50}}>A full stack React Native app inspired by the UberEats user app. I utilized AWS Amplify's datastore to configure the back end to query and save customer's orders and used Amazon Cognito for user registration, authentication, & account recovery.</p>

            <div style={{flexDirection: "row"}}>
                <UberGoogleButton  />
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
       <div style={{marginTop: 80, marginBottom: 120, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <div className="imgWrapper" style={{width: 450, height: 350}}>
                <img style={{ marginTop: 50, width: "100%", height: "auto", transition: ".7s", }} src="/images/astonmock.png" />
            </div>
            <h4 style={{textAlign: 'center'}}>Aston Waikiki Hotel UI</h4>
                <div style={{flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: -40,}}>
                  <img style={{width: 50, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
                  <img style={{width: 80, height: 50, }} src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"  />
                </div>
            <p style={{fontSize: 20,textAlign: 'center', padding: 50}}>A React Native UI design I created to reimagine the hotel Aston Waikiki Beach's website into a cross platform mobile app. I used most of the content and images from the current website and utilized both Bottom Tabs, Drawer navigation and other React Native libraries for a better user experience.</p>

            <div style={{flexDirection: "row"}}>
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
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>I created this React Native app for visitors of Barcelona Spain to save pictures and locations of their favorite places. I used pop-up modals for users to quickly get information on popular sights and used geolocation with google maps so users can save their location and select it on the map.</p>
            
            <div style={{flexDirection: "row"}}>
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
        {/* <div style={{marginBottom: 0, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10}} className="box">
            <img style={{ width: 600, height: 350, borderRadius: 10, borderWidth: 2, borderColor: "green"}} src="/images/innermock.png" />
            <h4 style={{textAlign: 'center'}}>Inner Aura Readings Website</h4>
            <div style={{flexDirection: "row", padding: 10, borderRadius: 10}}>
                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" style={{width: 100, height: 50,}} />
                <img className="logoBox" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" style={{width: 50, height: 50,}} />
            </div>
            <p style={{fontSize: 20, textAlign: 'center', padding: 50}}>This was the first official React.js web app that I developed. I made it for a friend who wanted to reach more customers with a mobile friendly website. I made multiple iterations and converted it into a PWA for offline operability with native like performance. </p>
            <button style={{marginTop: 0}} type="button" className="codeButton">
                        <a href="https://github.com/JamesPesenti/InnerAuraReadings2022" target="_blank" rel="noopener noreferrer">
                            <FaGithub  size={45} style={{ marginTop: -80, marginBottom: -20, justifyContent: "center", textAlign: "center"}} />     
                        </a>
                        <p>See Code</p>
            </button>
            
        </div> */}


{/* REapp */}
        {/* <div style={{marginBottom: 100, justifyContent: 'center', alignItems: 'center',  width: "80%", borderRadius: 10,}} className="box">
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
        </div> */}

    </div>

       
    </>
  )
}

export default MyProjects