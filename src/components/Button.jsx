import React from 'react'

const Button = ({text}) => {

  const handleClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61564674218798", "_blank");
  }

  return (
    <div className='main__button'>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button
