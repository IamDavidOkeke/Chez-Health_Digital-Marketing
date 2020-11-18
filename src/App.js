import React, { useState } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/Blog/Blogpost'
import Cta from './components/cta';
import Footer from './components/footer'
import ContactModal from './components/ContactModal';

function App () {
  const [modalOpen, setModalOpen] = useState(null);


  const openModal = ()=>{
    setModalOpen(true);
    window.gtag_report_conversion()
  }
  const closeModal = (e)=>{
    if(e.target.classList.contains('contactModal')){
      setModalOpen(null)
    }
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
         {modalOpen && <ContactModal closeModal={closeModal}/>}
        <div className="grid-nav">
          <Navbar/>
        </div>
        <div className="grid-main"> 
            <Route  exact path='/'component={HomePage} />
            <Route exact path='/blog'component={Blog} />
            <Route path='/blog/:url'component={BlogPost} />
            <Cta openModal={openModal}/>
        </div>
        <div className="grid-foot">
          <Footer/>
        </div>   
      </div>
    </BrowserRouter>
  );
}

export default App;

