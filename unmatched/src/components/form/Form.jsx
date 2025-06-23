import React from 'react'
import Button from '../Button/Button'

const Form = () => {
    return (
        <div className='w-[98%] h-[600px] mx-auto flex flex-col px-1  mb-25'>
            <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%]'>
                Join Unmatched Waitlist
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-4 '>
                We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
            </p>
            <form action="" className='w-[100%] border-2 drop-shadow-md bg-white px-2 py-5'>
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
                <select name="relationship type" id="" className='border-2 drop-shadow-sm w-[98%] mb-3 bg-white h-[35px] outline-0 px-2'>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <Button/>
                <p></p>
            </form>

        </div>
    )
}

export default Form