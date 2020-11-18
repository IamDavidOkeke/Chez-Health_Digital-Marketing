import React from 'react';
import Home from './Home'
import Body from './Body';
import Proof from './Proof';

const HomePage = ({openModal})=>{
 return(
           <div>
                <Home openModal={openModal}/> 
                <Body/>
                <Proof/>
            </div>
 )
}

export default HomePage