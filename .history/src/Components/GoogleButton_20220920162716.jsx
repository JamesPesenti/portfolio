import React from 'react'


const GoogleButton = () => {
  return (
    <>
    {/* <button type="submit">   
        <a href="https://play.google.com/store/apps/details?id=com.jamespesenti.astonwaikikibeach">        
                <image
                    style={{ width: 200, height: 200 }}
                    src="public/images/logo.png" 
                />
        </a>
    </button> */}
    <button style={{ width: 20, height: 20 }}>
        <img className="logoBox" style={{width: "50%", height: "50%", position: "center", marginLeft: -100 }} src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo-500x281.png"/>
    </button>
    </>
  )
}

export default GoogleButton