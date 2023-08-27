import React from 'react'

const AdvisorCard = () => {
  return (
    <div>
        <div className='text-3xl text-center p-4'>Mentors and Advisors</div>
        <div className='flex p-4'>
            <div className='text-center w-56'>
                <img className=' h-40 mx-10' alt='advisor-logo' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'/>
                <h1 >P.Omkar</h1>
                <h1>Principal Project Scientist</h1>
                <h1>IIT Madras</h1>
            </div>
            <div className='text-center w-56'>
                <img className=' h-40 mx-10' alt='advisor-logo' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'/>
                <h1 >P.Omkar</h1><br/>
                <button className='border border-black'>message him now</button>
            </div>
            <div className='text-center w-56'>
                <img className=' h-40 mx-10' alt='advisor-logo' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'/>
                <h1 >P.Omkar</h1><br/>
                <button className='border border-black'>message him now</button>
            </div>
        </div>
    </div>
  )
}

export default AdvisorCard