import React from 'react'
import Button from '../ui/Button'

const WhatWeDo = () => {
    return (
        <div className='md:h-screen flex mx-4 md:mx-32 py-20 md:pt-44 gap-32'>
            <div className='flex md:h-3/4'>
                <video src="/assets/1.mp4" autoPlay muted loop className='h-full md:block hidden' />
                <div className='flex flex-col justify-center font-regular md:pl-36 md:pr-16 gap-12'>
                    <h1 className='text-3xl'>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</h1>
                    <Button url='/services' className="border-1 border-black rounded-full w-full md:w-fit text-2xl md:text-3xl" padding='px-20 py-16'>
                        What we do
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default WhatWeDo