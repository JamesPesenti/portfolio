import React from 'react'

const AppleButton = () => {
  return (
    <>
    <button type="button" style={{borderWidth: 1, borderColor: 'black', borderRadius: 5}}>
        <a href="https://play.google.com/store/apps/details?id=com.jamespesenti.astonwaikikibeach">
            <img style={{width: 200, height: 100, borderRadius: 0}} src="https://developer.apple.com/news/images/og/app-store-badge-og-twitter.jpg"/>
        </a>
    </button>
    </>
  )
}

export default AppleButton