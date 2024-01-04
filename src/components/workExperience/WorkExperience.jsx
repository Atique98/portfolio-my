import React from 'react';
import './WorkExperience.css'
import ExperienceCard from './experienceCard/ExperienceCard';
import { WORK_EXPERIENCE } from '../../utils/data';

const WorkExperience = () => {
  return (<>
  <section className='experience-container'>
    <h5>Work Experience</h5>
    <div className="experience-content">
      {WORK_EXPERIENCE.map((item) =>(
        <ExperienceCard key={item.title} details={item} />
      ))}
    </div>
        </section>
    </>
  )
}

export default WorkExperience