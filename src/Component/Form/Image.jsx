import React from 'react'
import BgImage from '/pexels-rickyrecap-1907785.jpg'

function Image() {
  return (
    <div className='items-center ' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', width:"45%" , height: '100vh' , opacity:"80%" }} >
        <h1 className='text-5xl text-white text-center mt-[400px]'>Registration For Free</h1>
        <p className='text-md font-light text-white text-center p-6'>The registration for this course group project is completely free of charge for all participating students. Each group must register their selected company and research topic with the course instructor before beginning their work. The registration process ensures that no two groups select the same company or identical topic areas.</p>
     
    </div>
  )
}

export default Image
