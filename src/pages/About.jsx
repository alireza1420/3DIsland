import React, { Children } from 'react'
import { experiences, skills } from "../constants";


const About = () => {
  return (
<section className='max-container'>
  <h1 className='head-text'>
    Hello, I'm <span className='blue-gradient_text font-semibold
    drop-shadow'>Alireza</span>
  </h1>

<div className='mt-5 flex flex-col gap-3 text-slate-500'>
  <p>Software Engineer based in Sweeden, 
    Specializing in Web-based Applications, Front-end & Back-end.
  </p>
</div>


<div className='py-10 flex flex-col'>
  <h3 className='subhead-text'>
My Skills
  </h3>
</div>

<div className='mt-16 flex flex-wrap gap-12'>
<img src="../assets/icons/car.svg" alt="" />
    {skills.map((skill) => {      
    <div>
      <div>
        <p>{skill.name}</p>
        <img  src={skill.imageUrl} alt={skill
        .alt} className='w-1/2 h-1/2 object contain'></img>
      </div>
    </div>
    })}
</div>



</section>  )
}

export default About