import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { z } from 'zod';

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export type ExpenseFormData = z.infer<typeof schema>;

const RegisterForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input
            {...register('firstName')}
            type='text'
            placeholder='First name'
          />
          {errors.firstName && (
            <>
              <Text color='red'>{errors.firstName.message}</Text>
            </>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input
            {...register('lastName')}
            type='text'
            placeholder='Last name'
          />
          {errors.lastName && (
            <Text color='red'>{errors.lastName.message}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input {...register('email')} type='email' placeholder='Email' />
          {errors.email && <Text color='red'>{errors.email.message}</Text>}
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            {...register('password')}
            type='password'
            placeholder='Password'
          />
          {errors.password && (
            <Text color='red'>{errors.password.message}</Text>
          )}
        </FormControl>
        <Button colorScheme='whatsapp' mt={2} type='submit'>
          Submit
        </Button>
      </form>
      <Text my={1}>
        Already Signed Up?{'          '}
        <Link as={NavLink} to='/login' color='blue.200'>
          Login
        </Link>
      </Text>
    </>
  );
};

export default RegisterForm;
