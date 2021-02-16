import React, {useEffect, useState} from 'react';
import {
  Container,
  FormWrap,
  Form,
  FormH1,
  FormInput,
  FormMessage,
  FormButton,
  ThankYou,
} from './ContactElements';

const ContactSection = ({id})=>{
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);

  const handleSubmit = (event)=>{
    sendFeedback({message_html: message, from_name: email, reply_to: email})
  };

  const sendFeedback = (variables)=>{
    window.emailjs.send(
      'service_6ybh4v9', 
      'template_uio9097',
      variables
    ).then(res => {
      setEmailValidation(true);
    }).catch(err => {
      console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);

      setEmailValidation(false);
    });
  };

  useEffect(()=>{

  });

  return (
    <>
      <Container id={id} name={id}>
        <FormWrap>
          <Form>
            <FormH1>Would you like to contact me?</FormH1>
            <FormInput type='input' placeholder='Email' required value={email} onChange={(event)=> setEmail(event.target.value)}></FormInput>
            <FormMessage type='input' placeholder='Message' required value={message} onChange={(event)=> setMessage(event.target.value)}></FormMessage>
            {email !== '' && message !== ''? <FormButton type='button' onClick={
              ()=>handleSubmit()}>Message</FormButton> : <FormButton type='button' onClick={()=>{}}>Message</FormButton>}
            {emailValidation ? <ThankYou>Thank you for reaching me out!</ThankYou> : <></>}
            
          </Form>
        </FormWrap>
      </Container>
    </>  
  );
};

export default ContactSection;

