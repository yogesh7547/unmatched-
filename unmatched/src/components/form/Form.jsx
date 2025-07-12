import React from 'react'

import Image from '../assets/form/Rectangle.svg?react'

const Form = () => {
    return (
        <div id='form' className='w-[98%] md:w-[90%]  mx-auto flex flex-col px-1  mb-30'>
            <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%] md:text-[50px] md:mb-[2%] md:text-center'>
                Request Your Invitation
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-4 md:font-medium md:w-[90%] md:text-center md:pl-[10%] md:mb-20'>
                We're not for everyone. And that's exactly the point. Current cities: Mumbai, Delhi, Bangalore. 2,847 people ahead of you. Rolling invitations every two weeks.
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
                        Select Your City
                    </label>
                    <br />
                    <select name="city" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2'>
                        <option value="">Choose your city</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                    </select>
                    <br />

                    <label htmlFor="" className='text-25'>What's Your Vibe?</label><br />
                    <select name="vibe" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2 md:mb-9'>
                        <option value="">Choose your vibe</option>
                        <option value="chai">Chai over coffee dates</option>
                        <option value="bookstore">Bookstore browsing partner</option>
                        <option value="adventure">Adventure buddy for weekend plans</option>
                        <option value="movies">Someone to argue about movies with</option>
                        <option value="gym">Gym partner who won't judge my form</option>
                        <option value="surprise">Surprise me with something unique</option>
                    </select>

                    <button type='submit' className="w-[280px] h-[55px]   border border-black drop-shadow-sm bg-buttonPink">
                        Count Me In
                    </button>

                    <p className='mt-5'>
                        We'll be in touch within 48 hours. Check your spam folder—we're rebels, remember?
                    </p>

                </form>
            </div>

        </div>
    )
}

export default Form