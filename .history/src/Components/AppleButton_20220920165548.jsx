import React from 'react'

const AppleButton = () => {
  return (
    <>
    <button type="submit" >
        <a href="https://play.google.com/store/apps/details?id=com.jamespesenti.astonwaikikibeach">
            <img style={{width: 120, height: 50, borderRadius: 0}} src="https://images.squarespace-cdn.com/content/v1/5b549a7f3c3a53487c250f58/1597439116255-P7ME5MNOIWQLJS1X4CPP/Apple+App+Store+Logo+Button.png"/>
        </a>
    </button>
    </>
  )
}

export default AppleButton

.demo a {
    justify-content: center;
    position: relative;
    top: 100px;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
    font: 20px/1 'Josefin Sans', sans-serif;
    letter-spacing: .2em;
    text-decoration: none;
    transition: opacity .3s;
  }