import React from 'react';
import '../../styles/home.css';
import img from '../../media/Chez-Healthcare-Digital-Marketing-Services.png';


const Home = ({openModal}) =>{

    return(
        <div className="home">
          <div className="intro" >
              <h1 className="welcome">Web Development for the Modern Medical Practice</h1>
              <p className="who">Increase the amount of patients on your waiting queue with expert websites services built specifically for the 21st century healthcare consumer.</p>
              <div className="buttondiv">
                <button onClick={openModal} className="home-a btn1">GET STARTED</button>
              </div>
         </div>
            <div className="heroimg">
                          <img src={img} alt="Chez-Healthcare-Digital-Marketing-Services" className="heroimg"/>
                    </div>
        </div>
    )
}




export default Home
