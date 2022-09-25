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
            <img style={{width: 100, height: 50, borderRadius: 50}} src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo-500x281.png"/>
        </a>
    </button>
    </>
  )
}

export default GoogleButton