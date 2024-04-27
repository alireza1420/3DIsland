import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => {
    return(

    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src= {arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
    )
}
const renderContent = {

    1:(
        <h1  className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi I am 
        <span className='font-bold'> Alireza </span> 👋 <br />
        A Software Engineer from Sweden! </h1>
    ),
    2:(
        <InfoBox
        text= "Worked with Clean Energy sector medias and startups, and picked up many skills along the way !" 
            link="/about"
            btnText="Learn More!" />
    ) ,
    3:(
        <InfoBox 
        text= "Helped leading projects to sucess over the years. Curious about their impact?" 
        link="/projects"
        btnText="Visit my portfolio"/>
    ),
    4:(
       <InfoBox
       text="Need a project done or Looking for a dev? I'm just a few keystokes away"
       link="/contact"
       btnText="Let's Talk" />
    )

}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}




export default Homeinfo