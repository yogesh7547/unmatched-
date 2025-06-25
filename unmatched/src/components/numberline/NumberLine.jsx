import React from 'react'
import Line from '../assets/userflow/line.svg?react'
import One from '../assets/userflow/one.svg?react'
import Two from '../assets/userflow/two.svg?react'
import Three from '../assets/userflow/three.svg?react'
import Four from '../assets/userflow/four.svg?react'
import Five from '../assets/userflow/five.svg?react'

const NumberLine = () => {
    return (
        <div className=' hidden md:flex md:flex-col md:items-center md:mt-[100px]'>
            <Line />
            <One />
            <Line />
            <Two />
            <Line />
            <Three />
            <Line />
            <Four />
            <Line />
            <Five />



        </div>
    )
}

export default NumberLine