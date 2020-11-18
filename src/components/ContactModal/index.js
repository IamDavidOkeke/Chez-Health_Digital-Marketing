import React, {useState} from 'react';
import './contactModalStyles.css'
import imagesvg  from '../../media/Chez-Healthcare-Digital-marketing-contact.svg';
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated, closeModal})=>{
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')


    const onChangeName = (e)=>{
        setName(e.target.value)
    }
    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
    }

    const onSubmitForm = (e)=>{
        e.preventDefault;
        email &&
        name &&
        email.indexOf('@') > -1 &&
        onValidated({
            NAME: name,
            EMAIL: email
        })
    }

 return(
       <div className='contactModal' onClick={closeModal}>
           <div className='contactBox'>
           <div className='contactImg'>
            <img src={
                        imagesvg
                        } alt="Chez-Healthcare-Digital-Marketing-contact" style={{width:"100px",height:"100px"}} />
               </div>
               <div className='contactText'>
                   <p className='ctatext'>Input your email and we will get to you immediately </p>
               </div>
               <div className='form'>
                    <div className='mailchimpsuccess'>
                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                        {status === "error" && (
                            <div
                            style={{ color: "red" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                            />
                        )}
                        {status === "success" && (
                            <div
                            style={{ color: "green" }}
                            dangerouslySetInnerHTML={{ __html: message }}
                            />
                        )}
                </div>
               <form method='post' onSubmit={onSubmitForm}  encType='text/plain'>
                   <div>
                        <label>Your Full Name</label>
                        <input className='inputfield' type='text' required name='name' onChange={onChangeName}/>
                    </div>
                   <div>
                        <label>Your Email</label>
                        <input className='inputfield' type='email' required  name='email' onChange={onChangeEmail}/>
                    </div>
                    <div>
                        <input type='submit' value='submit' className='submitbtn'/>
                    </div>
                </form> 
               </div>
            </div>
        </div>
 )
}

const ContactModal = ({closeModal})=>{
    return(
              <div className='cta' id='cta'>
                    <MailchimpSubscribe 
                        url={url}
                        render={({subscribe, status, message})=> (
                            <CustomForm 
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                                closeModal={closeModal}
                               
                            />
                        )}
                    />
               </div>
    )
   }

export default ContactModal