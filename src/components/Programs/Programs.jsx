import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'

const Programs = () => {
    return (
        <div className='Programs' id="programs">
            <div className="programs-header">
            <span>perfect</span>
            <span>your</span>
            <span>skillz</span>
            </div>

            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'></div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs