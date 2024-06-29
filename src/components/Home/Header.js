import React from 'react'
import Image from 'next/image'
const Header = () => {
  const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
  return (
    <div>
      <img src='./Image/logo.png' width={150} alt='logo img'/>
      <div>
        <button className='bg-black text-white p-2'>CREAT POST</button>
        <button>SIGN IN</button>
      </div>
      <Image src={USER_IMAGE} alt='user img' width={40} height={40} />
    </div>
  )
}

export default Header
