import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
function Contact() {
    const [data, setData] = React.useState({
        Name: '',
        Email: '',
        Message: ''
      });
      
    const [sent, setSent] = React.useState(false);
    const [loading,setLoading] = React.useState(false)
    const [disable,setDisable] = React.useState(true)
    const [loadMessag,setLoadMessage] = React.useState('Sending...')
    if(loading){
      setTimeout(() => {
        setLoadMessage('Failed to send check your connection')
      },6000)
    }
    React.useEffect(() => {
        if(data.Name && data.Email && data.Message){
            setDisable(false)
        }
    },[data])
    
      
        console.log(disable)
      const handleChange = (e) => {
        const cur = e.target.name;
        setData((prev) => ({
          ...prev,
          [cur]: e.target.value
        }));
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx38Uy0qFctCnX2_f_m3U-75yvYlJ0wI6zmiF7yV_yEwGWG99g15oJ6YHsgHjR9-1J4Sg/exec';
        const formData = new FormData();
        formData.append('Name', data.Name);
        formData.append('Email', data.Email);
        formData.append('Message', data.Message);
      
        try {
          const response = await fetch(scriptURL, { method: 'POST', body: formData });
          if(response.ok){
           setData({
            Name: '',
            Email: '',
            Message: ''
          })
          setSent(true)
          }
        } catch (error) {
          console.error('Error!', error.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-email">
            <span className="telegram-icon"><FaTelegramPlane/></span>
            <a className='email-text' href={`mailto:${'emran.yonas@aait.edu.et'}`}>Contact@emran.yonas@aait.edu.et</a>
        </div> 
        <div className="contact-telephone">
            <span className="telephone-icon"><BsFillTelephoneOutboundFill/></span>
            <a className='telephone-text' href="tel:+251988216467">+251 988 216 467</a>
        </div>
        <div className="reach-me">
            <a href='#' className="reach-me-on">
                <FiTwitter/>
           </a>
            <a href='#'  className="reach-me-on">
                <AiOutlineLinkedin/>
           </a>
            <a href='#'  className="reach-me-on">
                <BsFacebook/>
           </a>
            <a href='#'  className="reach-me-on">
                <AiOutlineInstagram/>
           </a>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="my-form">
            <input required type='text' value={data.Name} onChange={(e) => handleChange(e)} name='Name' className='Name' placeholder='Your Name'/>
            <input required type='email' value={data.Email} onChange={(e) => handleChange(e)} name='Email' className='Name'placeholder='Your Email'/>
            <textarea required placeholder='Your Message' value={data.Message} onChange={(e) => handleChange(e)} name='Message' className='text-area'></textarea>
            { sent ? 
            <h2 className='sent-message'>Thank you for your message. I have received it and will respond to you promptly.</h2>: loading && <h2 className='sending-message'>{loadMessag}</h2>}
            <button disabled={disable} onClick={() => setLoading(true)} type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact