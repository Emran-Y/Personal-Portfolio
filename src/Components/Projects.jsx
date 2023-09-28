import React from 'react'
import journal from '../Images/journal.jpeg'
import meme from '../Images/meme.jpeg'
import Quiz from '../Images/Quiz.jpeg'
import sol from '../Images/sol.jpeg'
import watchList from '../Images/watchList.jpeg'
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
import {BsBoxArrowUpRight} from 'react-icons/bs'

function Projects() {
  return (
    <div id='projects' className='projects'>
        <h2 className='projects-title'>Personal Projects </h2>
        <p className="projects-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum tenetur esse velit ipsum culpa dicta.</p>
        <div className="projects-cont">
          <section className="project">
            <h4 className="project-title">Learning Journal</h4>
            <img src={journal} alt="learning journal" className="project-img" />
            <p className="project-description">My Learning Journal: An interactive web app built with HTML, CSS, and JS to track and document personal learning experiences</p>
            <div className="tech-stack">
              <span className="html"><AiFillHtml5/></span>
              <span className="css"><DiCss3/></span>
              <span className="figma"><FiFigma/></span>
              <span className="javascript"><BiLogoJavascript/></span>
            </div>
            <a href="https://unrivaled-marzipan-5aa8b4.netlify.app/" target='blank' className="preview-bnt"><span className='preview-ico'><BsBoxArrowUpRight/></span>Preview</a>
          </section>
          <section className="project">
            <h4 className="project-title">Meme Generator</h4>
            <img src={meme} alt="meme-image" className="project-img" />
            <p className="project-description">Meme Generator: A dynamic web app using HTML, CSS, and JS that generates animated GIFs and pictures based on emojis, creating hilarious memes.</p>
            <div className="tech-stack">
              <span className="html"><AiFillHtml5/></span>
              <span className="css"><DiCss3/></span>
              <span className="figma"><FiFigma/></span>
              <span className="javascript"><BiLogoJavascript/></span>
            </div>
            <a href="https://merry-axolotl-a4fd8a.netlify.app" target='blank' className="preview-bnt"><span className='preview-ico'><BsBoxArrowUpRight/></span>Preview</a>
          </section>
          <section className="project">
            <h4 className="project-title">Quiz App</h4>
            <img src={Quiz} alt="quiz-app" className="project-img" />
            <p className="project-description">Quiz App: React-based interactive app that fetches 5 questions from an external API, with categorized questions and enhanced using React libraries.</p>
            <div className="tech-stack">
            <span className="html"><AiFillHtml5/></span>
              <span className="css"><DiCss3/></span>
              <span className="figma"><FiFigma/></span>
              <span className="javascript"><BiLogoJavascript/></span>
              <span className="react"><BiLogoReact/></span>
            </div>
            <a href="https://64fb112e38671d773b115a40--gregarious-chaja-4ca3dd.netlify.app/" target='blank' className="preview-bnt"><span className='preview-ico'><BsBoxArrowUpRight/></span>Preview</a>
          </section>
          <section className="project">
            <h4 className="project-title">Mobile Resturant App</h4>
            <img src={sol} alt="mobile resustrant image" className="project-img" />
            <p className="project-description">Mobile Restaurant Menu: A sleek and visually appealing ordering app for small shops, designed using HTML, CSS, and JS.</p>
            <div className="tech-stack">
              <span className="html"><AiFillHtml5/></span>
              <span className="css"><DiCss3/></span>
              <span className="figma"><FiFigma/></span>
              <span className="javascript"><BiLogoJavascript/></span>
            </div>
            <a href="https://grand-cranachan-a9dbd5.netlify.app/" target='blank' className="preview-bnt"><span className='preview-ico'><BsBoxArrowUpRight/></span>Preview</a>
          </section>
          <section className="project">
            <h4 className="project-title">Movie Watch-List</h4>
            <img src={watchList} alt="watch-list-image" className="project-img" />
            <p className="project-description">Movie Watchlist: A responsive app using HTML, CSS, and JS that allows you to search for movies, displaying posters, descriptions, ratings, and saving films for later viewing. It utilizes an external film API.</p>
            <div className="tech-stack">
              <span className="html"><AiFillHtml5/></span>
              <span className="css"><DiCss3/></span>
              <span className="figma"><FiFigma/></span>
              <span className="javascript"><BiLogoJavascript/></span>
            </div>
            <a href="https://delightful-lily-3f2abf.netlify.app/" target='blank' className="preview-bnt"><span className='preview-ico'><BsBoxArrowUpRight/></span>Preview</a>
          </section>
        </div>
    </div>
  )
}

export default Projects