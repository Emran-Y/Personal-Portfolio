import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';  
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoFirebase } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { BiLogoJava } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';


function Skill() {
  return (
    <div id='skill' className='skill'>
        <div className='skill-intro'>
            <h2 className='skill-title'>What I do</h2>
            <p className='skill-paragraph'>Passionate about coding, I create innovative solutions and delightful user experiences.</p>
        </div>
        <div className='skills-cont'>
            <div className='techo-skill-title'>Skills</div>
            <div className='skills'>
                <div className='technologies'>
                    <AiFillHtml5/>
                    <h4 className='technos-title'>HTML</h4>
                </div>
                <div className='technologies'>
                    <DiCss3/>
                    <h4 className='technos-title'>CSS</h4>
                </div>
                <div className='technologies'>
                    <BsBootstrap/>
                    <h4 className='technos-title'>BOOTSTRAP</h4>
                </div>
                <div className='technologies'>
                    <FiFigma/>
                    <h4 className='technos-title'>FIGMA</h4>
                </div>
                <div className='technologies'>
                    <BiLogoJavascript/>
                    <h4 className='technos-title'>JAVASCRIPT</h4>
                </div>
                <div className='technologies'>
                    <BiLogoReact/>
                    <h4 className='technos-title'>REACT</h4>
                </div>
                <div className='technologies'>
                    <BiLogoFirebase/>
                    <h4 className='technos-title'>FIREBASE</h4>
                </div>
                <div className='technologies'>
                    <FaPython/>
                    <h4 className='technos-title'>PYTHON</h4>
                </div>
                <div className='technologies'>
                    <BiLogoJava/>
                    <h4 className='technos-title'>JAVA</h4>
                </div>
                <div className='technologies'>
                    <AiFillGithub/>
                    <h4 className='technos-title'>GITHUB</h4>
                </div>
                <div className='technologies'>
                    <BiNetworkChart/>
                    <h4 className='technos-title'>NETWORKING</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill