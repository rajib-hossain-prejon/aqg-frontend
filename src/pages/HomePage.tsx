import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import studentImage from '../assets/images/student.jpeg';
import supervisorImage from '../assets/images/supervisor.jpeg';

const studentOfTheProject = {
  image: studentImage,
  Name: 'Iftekhar Ul Rouf',
  ID: '183-15-11809',
  Department: 'Computer Science Engineering',
  University: 'Daffodil International University',
};

const supervisorOfTheProject = {
  image: supervisorImage,
  Name: 'Shah Md. Tanvir Siddiquee',
  Designation: 'Assistant Professor',
  Department: 'Computer Science & Engineering',
};

const HomePage = () => {
  return (
    <Box bgGradient='linear(to-r, green.300, teal.300)' minH='100vh'>
      <Box py={8} textAlign='center' color='white'>
        <Heading size='3xl' mb={4}>
          Project Title: Automatic Question Generator
        </Heading>
        <Text fontSize='2xl'>Student and Supervisor Profiles</Text>
      </Box>
      <Flex maxW='6xl' mx='auto' mt={8} justifyContent='center' flexWrap='wrap'>
        <Box
          mr={12}
          mb={8}
          textAlign='center'
          flex={{ base: '100%', md: 'auto' }}
          width={{ base: '100%', md: 'auto' }}
        >
          <Image
            src={studentOfTheProject.image}
            boxSize='200px'
            objectFit='cover'
            mb={4}
            mx='auto'
            borderRadius='full'
            borderWidth='5px'
            borderColor='white'
          />
          <Text fontWeight='bold' fontSize='2xl' mb={2} color='white'>
            {studentOfTheProject.Name}
          </Text>
          <Text fontSize='lg' mb={2} color='white'>
            ID: {studentOfTheProject.ID}
          </Text>
          <Text fontSize='lg' mb={2} color='white'>
            {studentOfTheProject.Department}
          </Text>
          <Text fontSize='lg' mb={4} color='white'>
            {studentOfTheProject.University}
          </Text>
        </Box>
        <Box
          textAlign='center'
          flex={{ base: '100%', md: 'auto' }}
          width={{ base: '100%', md: 'auto' }}
        >
          <Image
            src={supervisorOfTheProject.image}
            mx='auto'
            boxSize='200px'
            objectFit='cover'
            mb={4}
            borderRadius='full'
            borderWidth='5px'
            borderColor='white'
          />
          <Text fontWeight='bold' fontSize='2xl' mb={2} color='white'>
            {supervisorOfTheProject.Name}
          </Text>
          <Text fontSize='lg' mb={2} color='white'>
            {supervisorOfTheProject.Designation}
          </Text>
          <Text fontSize='lg' mb={4} color='white'>
            {supervisorOfTheProject.Department}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
