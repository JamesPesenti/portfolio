import React from 'react'
import Button from '@mui/material/Button';


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
    <Button varient="text">
    <image
                    style={{ width: 200, height: 200 }}
                    src="public/images/logo.png" 
                />
    </Button>
    </>
  )
}

export default GoogleButton