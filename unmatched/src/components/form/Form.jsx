import React from 'react'

import Image from '../assets/form/Rectangle.svg?react'

const Form = () => {
    return (
        <div id='form' className='w-[98%] md:w-[90%]  mx-auto flex flex-col px-1  mb-30'>
            <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%] md:text-[50px] md:mb-[2%] md:text-center'>
                Join Unmatched Waitlist
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-4 md:font-medium md:w-[90%] md:text-center md:pl-[10%] md:mb-20'>
                We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
            </p>

            <div className='md:flex md:h-[90%] md-w-full md:justify-center'>

                <form action="" className='w-[100%] border-2 drop-shadow-md bg-white px-2 py-5 md:w-[50%] md:p-5'>
                    <label htmlFor="" className='text-25'>
                        Enter Name
                    </label>
                    <br />
                    <input type="text" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2' />
                    <br />

                    <label htmlFor="" className='text-25'>
                        Enter Email Address
                    </label>
                    <br />
                    <input type="text" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2' />
                    <br />

                    <label htmlFor="" className='text-25'>
                        Enter Your Age
                    </label>
                    <br />
                    <input type="text" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2' />
                    <br />

                    <label htmlFor="" className='text-25'>What are You Looking For?</label><br />
                    <select name="relationship type" id="" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2 md:mb-9'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                    <button type='submit' className="w-[280px] h-[55px]   border border-black drop-shadow-sm bg-buttonPink">
                        Join Waitlist
                    </button>

                    <p className='mt-5'>
                        By joining, You agree to our <a href="#" className='text-pink-300'>Terms</a> and <a href="#" className='text-pink-300'> Privacy Pocily</a>
                    </p>

                </form>
            </div>

        </div>
    )
}

export default Form