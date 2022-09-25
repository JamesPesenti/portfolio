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
    <button>
        <a href="https://play.google.com/store/apps/details?id=com.jamespesenti.astonwaikikibeach">
            <img style={{width: 100, height: 50, borderRadius: 50}} src="https://i.pinimg.com/originals/8a/02/1a/8a021aa097236b42dd71fb731e3d894d.gif"/>
        </a>
    </button>
    </>
  )
}

export default GoogleButton