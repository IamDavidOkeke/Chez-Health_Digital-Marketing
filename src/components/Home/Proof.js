import React,{useEffect} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import '../../styles/proof.css'
import cyano from "../../media/Chez-Healthcare-Digital-Marketing-eddy.jpeg"

const Proof = () =>{

    useEffect(()=>{
        aos.init({duration: 2000});
    },[]);

    return(
        <div className='testdiv' >
            <h2 className='test'>Testimonial</h2>
        <div className="testimonial">
          <div data-aos='fade-right' className='testimony'>
              <p  className='h' >"Chez Digital Health changed my business and helped me finally acheive a good work-life balance while also serving more people doing what I love."</p>
          <p>Eddy</p>
          <sub>Medical Doctor and Founder <a href='https://www.lifesavers.com.ng' className='ls'>LifeSavers</a></sub>
          </div>
          <div>
                <img src={cyano} alt="Chez-Healthcare-Digital-Marketing-testimony" className='img'/>
            </div>
        </div>
        </div>
    )
}




export default Proof