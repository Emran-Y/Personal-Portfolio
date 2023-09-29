import React, { useEffect, useState } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';

function Home() {
  const welcomeMessages = ['Welcome!', 'Bienvenue!', 'Willkommen!', 'ようこそ！', 'أهلاً وسهلاً!'];
  const skills = ['Software', 'Front-end', 'UI/UX', 'Network'];
  const [welcomeMessageIndex, setWelcomeMessageIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  const [shouldShake, setShouldShake] = useState(true);

  useEffect(() => {
    const welcomeMessageInterval = setInterval(() => {
      setWelcomeMessageIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 8000);

    const skillInterval = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 4000);

    return () => {
      clearInterval(welcomeMessageInterval);
      clearInterval(skillInterval);
    };
  }, [welcomeMessages.length, skills.length]);

  useEffect(() => {
    setShouldShake(true);
    const shakeTimeout = setTimeout(() => {
      setShouldShake(false);
    }, 1000);

    return () => {
      clearTimeout(shakeTimeout);
    };
  }, [welcomeMessageIndex]);

  const currentWelcomeMessage = welcomeMessages[welcomeMessageIndex];
  const currentSkill = skills[skillIndex];

  return (
    <main id='Home' className="about-me">
      <div className="messages-me">
        <h2 className="welcome-message">
          {currentWelcomeMessage}
          <span className={`wave-emoji ${shouldShake ? 'shake-animation' : ''}`}></span>
        </h2>
        <h4 className="my-name">HI, I'M <span className="my--name">EMRAN</span></h4>
        <img className='my-image' src='https://randomuser.me/api/portraits/men/1.jpg' alt='my-image' />
        <h3 className="about-me-message">YOUR FRIENDLY NEIGHBORHOOD EXTRAORDINAIRE <span className='about-me--message'>{currentSkill}</span> ENGINEER</h3>
        <div className='social-media'>
          <a href='https://www.linkedin.com/in/emran-yonas-yimer-230192232/'><AiOutlineLinkedin /></a>
          <a href='#'><FiTwitter /></a>
          <a href='https://github.com/Emran-Y'><AiOutlineGithub /></a>
          <a href={`mailto:${'emran.yonas@aait.edu.et'}`}><AiOutlineMail /></a>
        </div>
      </div>
      <div className='about-me-buttons'>
        <button className='about-hire-me'>Hire me</button>
        <button className='about-download-my-cv'><span className='download-icon'><BsDownload /></span> Download my CV</button>
      </div>
      <div className='the-line'></div>
    </main>
  );
}

export default Home;