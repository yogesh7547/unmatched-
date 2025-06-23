import React from 'react'
import Button from '../Button/Button'

const Form = () => {
    return (
        <div className='w-[98%] h-[600px] mx-auto flex flex-col px-2 bg-yellow-400'>
            <h1 className='font-extrabold text-[40px] leading-[130%] tracking-[-1%] mb-[5%]'>
                Join Unmatched Waitlist
            </h1>
            <p className='w-[100%] leading-[120%] text-[18px] mb-4 '>
                We believe real connection doesn't start with a swipe. That's why Unmatched focuses on shared vibes, deeper chats, and meaningful first impressions—beyond the screen.
            </p>
            <form action="">
                <label htmlFor="">
                    Enter Name
                </label><br />
                <input type="text" /><br />
                <label htmlFor="">
                    Enter Email Address
                </label><br />
                <input type="text" /><br />
                <label htmlFor="">
                    Enter Your Age
                </label><br />
                <input type="text" /><br />
                <label htmlFor="">What are You Looking For?</label><br />
                <select name="relationship type" id="">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <Button />
                <p></p>
            </form>

        </div>
    )
}

export default Form