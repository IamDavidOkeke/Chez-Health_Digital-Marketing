import React from 'react';
import '../styles/footer.css';
import twittersvg  from '../media/Chez-Healthcare-Digital-Marketing-twitter.svg';
import linkedinsvg  from '../media/Chez-Healthcare-Digital-Marketing-linkedin.svg';
import facebooksvg  from '../media/Chez-Healthcare-Digital-Marketing-facebook.svg';
import telephonesvg  from '../media/Chez-Healthcare-Digital-Marketing-telephone.svg';


const Footer = () =>{
    return(
        <div>
            <footer className="footer">
               <div className='footlink'>
               <a href='https://facebook.com/chezhealth' className='footlinks' target="-blank" rel="noopener noreferrer">
               <img src={
                    facebooksvg
                    } alt="Chez-Healthcare-Digital-Marketing-facebook" style={{width:"25px",height:"25px"}} className='footlinkimg' />
               </a>
               <a href='https://twitter.com/chezhealth' className='footlinks' target="-blank" rel="noopener noreferrer">
               <img src={
                    twittersvg
                    } alt="Chez-Healthcare-Digital-Marketing-twitter" style={{width:"25px",height:"25px"}} className='footlinkimg' />
               </a>
               <a href='https://linkedin.com/iamdavidokeke' className='footlinks' target="-blank" rel="noopener noreferrer">
               <img src={
                    linkedinsvg
                    } alt="Chez-Healthcare-Digital-Marketing-linkedin" style={{width:"25px",height:"25px"}} className='footlinkimg' />
               </a>
               <a href='mailto:info@chezhealth.com' className='footlinks'target="-blank" rel="noopener noreferrer">
               <img src={
                    telephonesvg
                    } alt="Chez-Healthcare-Digital-Marketing-telephone number" style={{width:"25px",height:"25px"}} className='footlinkimg'  />
               </a>
               </div>
               <small className="footerp">© 2020 Chez Inc.., All Rights Reserved</small>
            </footer>
        </div>
    )
}





export default Footer