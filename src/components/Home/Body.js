import React, {useEffect} from 'react';
import mobilesvg  from '../../media/Chez-Healthcare-Digital-Marketing-mobile.svg'
import crownsvg  from '../../media/Chez-Healthcare-Digital-Marketing-crown.svg'
import domainsvg  from '../../media/Chez-Healthcare-Digital-Marketing-domain.svg'
import '../../styles/body.css';
import aos from 'aos';
import 'aos/dist/aos.css';


const Body = () =>{

    useEffect(()=>{
        aos.init({duration: 2000});
    },[]);
    return(
        <div className='body' id='body'>
            <h2 className="pointsheader">Let us help you . . .</h2>
                <div className="points-container">
                <div className="points a" >
                <img src={
                    domainsvg
                    } alt="Chez-Healthcare-Digital-Marketing-domain" style={{width:"50px",height:"50px"}} />
                    <h3>Reach a larger audience</h3>
                    <p className='point'>We help you get the word out. With platforms that reach a larger audience and grow your business income quickly.</p>
                </div>
                <div className="points b" >
                <img src={
                    mobilesvg
                    } alt="Chez-Healthcare-Digital-Marketing-mobile" style={{width:"50px",height:"50px"}} />
                    <h3>Allow patients book appointments</h3>
                    <p className='point'>Take control of your work-life balance and give patients the opportunity to book appointments online </p>
                </div>
                <div className="points c" >
                    <img src={
                    crownsvg
                    } alt="Chez-Healthcare-Digital-Marketing-Crown" style={{width:"50px",height:"50px"}} />
                    <h3>Improve Credibilty</h3>
                    <p className='point'>Being Online proves authenticity and trust with your customers and helps improve your identity.</p>
                </div>
            </div>
            <div className='wavediv'>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f0ff" fillOpacity="1" d="M0,0L48,21.3C96,43,192,85,288,138.7C384,192,480,256,576,266.7C672,277,768,235,864,192C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
            <div className="offers">
                <h2 className='offerheader'>What We Offer</h2>
                <div className="offer-container">
                <div className="offer">
                    <h3>Quality Digital Platforms</h3>
                    <p className='point'>Websites and mobile apps tailored for healthcare purposes aimed at ensuring enjoyable user experience keeping them with you. </p>
                </div>
                <div className="offer">
                    <h3>Digital Marketing Consultancy</h3>
                    <p className='point'>Worried about how to market your work digitally? we got you from Google ads to Data analytics, with Google Certified Digital Marketers, we help you know what works and improve your business </p>
                </div>
                <div className="offer">
                    <h3>Affordable Services</h3>
                    <p className='point'>We have your interest at heart, our services are tailored to help your business grow while also making sure you don't go broke.</p>
                </div>
            </div>
            </div>
        </div>
    )
}





export default Body