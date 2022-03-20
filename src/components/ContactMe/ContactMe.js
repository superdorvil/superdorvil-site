import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  ContactInfoContainer,
  MyEmail,
  FriendlyMessageContainer,
  SocialMediaContainer,
  InnerContainer,
  Name,
  Email,
  Phone,
  Message,
  FriendlyMessage,
} from './Elements';
import Header from '../Header';
import FormButton from '../FormButton';
import SocialMediaIcons from '../SocialMediaIcons';
import {STATES} from '../../constants';

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_79eljpf', 'superdorvil_contact_me', form.current, 'xX7pQgYsfreBrNEAp')
      .then((result) => {
          console.log(result.text);
          window.alert('Message sent, I will respond as soon as possible.');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          window.alert('Message not sent, sorry, send an email to Dgabriel999@gmail.com');
      });
  };

  return (
    <Container id={STATES.appMode.contact} ref={form} onSubmit={sendEmail}>
      <Header title="Contact Me" />
      <InnerContainer>
        <FriendlyMessageContainer>
          <FriendlyMessage>I will make you a killer Blockchain DAPP</FriendlyMessage>
          <FriendlyMessage>Hit me up!!!</FriendlyMessage>
        </FriendlyMessageContainer>
        <SocialMediaContainer>
          <SocialMediaIcons />
        </SocialMediaContainer>
        <Name type="text" placeholder="Enter Name: " name="name" />
        <ContactInfoContainer>
          <Email type="email" placeholder="Enter Email: " name="email" />
          <Phone type="number" placeholder="Enter Phone: " name="phone" />
        </ContactInfoContainer>
        <Message type="text" placeholder="Enter Message: " name="message" />
        <FormButton value="Submit" />
        <MyEmail>dgabriel999@gmail.com</MyEmail>
      </InnerContainer>
    </Container>
  )
}

export default ContactMe;
