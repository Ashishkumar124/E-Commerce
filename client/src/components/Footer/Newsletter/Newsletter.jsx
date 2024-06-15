import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {

    const handleIconClick = (socialMedia) => {
        // Perform actions based on the clicked social media icon
        switch (socialMedia) {
            case 'facebook':
                window.open('https://www.facebook.com/profile.php?id=100048499261254', '_blank');
                break;
            case 'twitter':
                window.open('https://twitter.com/Ashish_Kumar07_', '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com/who_ashish__', '_blank');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/ashish-kumar-124983267', '_blank');
                break;
            case 'github':
                window.open('https://github.com/Ashishkumar124/Ashishkumar124', '_blank');
                break;
            default:
                break;
        }
    };
    
    return (
        <div className='newsletter-section'>
            <div className='newsletter-content'>
                <div className='small-text'>Newsletter</div>
                <span className='big-text'>Sign up for latest updates and offers</span>
                <div className='form'>
                    <input type='text' placeholder='Enter your email' />
                    <button type='submit'>Subscribe</button>
                </div>
                <div className='text'>Will be used in accordance with our <a href="https://privaces-polices-07.netlify.app/">Privacy Policy</a></div>

                <div className='social-icons'>
                    <div className='icon' onClick={() => handleIconClick('facebook')}>
                        <FaFacebookF/>
                    </div>
                    <div className='icon' onClick={() => handleIconClick('instagram')}>
                        <FaInstagram />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('twitter')}>
                        <FaTwitter />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('linkedin')}>
                        <FaLinkedinIn />
                    </div>
                    <div className='icon' onClick={() => handleIconClick('github')}>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
