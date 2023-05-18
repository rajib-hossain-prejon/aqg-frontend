import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [married, setMarried] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [medicalCentre, setMedicalCentre] = useState('');
  const [medicalAddress, setMedicalAddress] = useState('');
  const [medicalTelephone, setMedicalTelephone] = useState('');
  const [sufferingFrom, setSufferingFrom] = useState('');
  const [operations, setOperations] = useState('');
  const [medication, setMedication] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Box mx='auto' w='60%'>
        <Heading as='h1' mb='4'>
          Medical Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id='name' mb='4'>
            <FormLabel>Name of client:</FormLabel>
            <Input
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id='dob' mb='4'>
            <FormLabel>D.O.B:</FormLabel>
            <Input
              type='date'
              placeholder='Enter your date of birth'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </FormControl>
          <FormControl id='gender' mb='4'>
            <FormLabel>Sex:</FormLabel>
            <RadioGroup onChange={(e) => setGender(e)}>
              <Stack direction='row'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
                <Radio value='other'>Other</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl id='married' mb='4'>
            <FormLabel>Married:</FormLabel>
            <RadioGroup onChange={(e) => setMarried(e)}>
              <Stack direction='row'>
                <Radio value='yes'>Yes</Radio>
                <Radio value='no'>No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl id='height' mb='4'>
            <FormLabel>Height:</FormLabel>
            <Input
              type='number'
              placeholder='Enter your height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormControl>
          <Button colorScheme='whatsapp'>Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
