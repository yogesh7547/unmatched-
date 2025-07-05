import React from 'react'


const AboutCard = ({title, content, bgcolor, icon }) => {
    return (
        <div>
            <div className={`w-[100%]  md:min-h-[200px] h-[200px] bg-${bgcolor} drop-shadow-md flex flex-col justify-center items-center text-center py-3 px-2 md:max-h-[300px]`}>
                {icon}
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className=' md:font-medium'>{content}</p>
            </div>


        </div>
    )
}

export default AboutCard