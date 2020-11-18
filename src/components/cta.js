import React from 'react';
import '../styles/cta.css'

const Cta = ({openModal})=>{
 return(
           <div className='cta' id='cta'>
                   <p className='text' >We are serious about taking your health startup Idea to the next level, Take your business to the next level and earn better</p>
               <div className="buttondiv">
                <button onClick={openModal} className="btn">GET STARTED</button>
              </div>
            </div>
 )
}

export default Cta