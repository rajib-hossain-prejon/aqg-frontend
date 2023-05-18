import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <form>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='email' placeholder='Please Enter Email Address!'></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter Password'></Input>
        </FormControl>
        <Button my={2} type='submit' colorScheme='whatsapp'>
          Submit
        </Button>
      </form>
      <Text>
        Not Signed Up?
        <Link as={NavLink} to='/register' colorScheme='blue.200'>
          Register
        </Link>
      </Text>
    </>
  );
};

export default LoginForm;
