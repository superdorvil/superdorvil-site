import {useState} from 'react';
import {
  Container,
  ContactInfoContainer,
  FriendlyMessageContainer,
  Name,
  Email,
  Phone,
  Message,
  FriendlyMessage,
} from './Elements';
import Button from '../Button';

function useNameInput(defaultValue) {
  const [name, setName] = useState('');

  function onChange(e) {
    setName(e.target.value);
  }

  return {
    name,
    onChange,
  };
}

function useEmailInput() {
  const [email, setEmail] = useState('');

  function onChange(e) {
    setEmail(e.target.value);
  }

  return {
    email,
    onChange,
  };
}

function usePhoneInput() {
  const [phone, setPhone] = useState('');

  function onChange(e) {
    setPhone(e.target.value);
  }

  return {
    phone,
    onChange,
  };
}

function useMessageInput() {
  const [message, setMessage] = useState('');

  function onChange(e) {
    setMessage(e.target.value);
  }

  return {
    message,
    onChange,
  };
}

function ContactMe() {
  const nameProps = useNameInput();
  const emailProps = useEmailInput();
  const phoneProps = usePhoneInput();
  const messageProps = useMessageInput();

  return (
    <Container>
      <FriendlyMessageContainer>
        <FriendlyMessage>I'll make you a killer Blockchain DAPP</FriendlyMessage>
        <FriendlyMessage>Hit me up!!!</FriendlyMessage>
      </FriendlyMessageContainer>
      <Name {...nameProps} placeholder="Enter Name: " />
      <ContactInfoContainer>
        <Email {...emailProps} placeholder="Enter Email: " />
        <Phone {...phoneProps} placeholder="Enter Phone: " />
      </ContactInfoContainer>
      <Message {...messageProps} placeholder="Enter Message: " />
      <Button description="Submit" />
    </Container>
  )
}

export default ContactMe;
