import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Home = () => {
    return (
        <section className='home'>
            <div className="hero">
                <span>I'M A</span>
                <span>PHOTOGRAPHER</span>
                <p>Capturing portraits, fashion and events since 2019.</p>
                <p>Get in touch with me</p>
                <SocialIcon className='social-icon' url="https://instagram.com/aashishphotography.in?igshid=MzRlODBiNWFlZA==" />
                <SocialIcon className='social-icon' url="https://www.linkedin.com/in/aashish-shrivastav-b29315262" />
                <SocialIcon className='social-icon' url="mailto:aashishphotography.in@gmail.com" network='mailto'/>
                {/* <SocialIcon className='social-icon' url="https://instagram.com/aashishphotography.in?igshid=MzRlODBiNWFlZA==" /> */}
            </div>
            <div className="foot">
                <p>Last updated: 16th AUG, 2023</p>
                {/* <div className="container">
                
        <a href="mailto:username@example.com">EMail</a>
         <a href="http://instagram.com">Instagram</a>
        <a href="http://linkedin.com">LinkedIn</a>
       <a href="http://twitter.com">Twitter</a>
     </div> */}
            </div>
        </section>
    )
}

export default Home