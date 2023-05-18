import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  const location = useLocation();
  const isActive = (pathname: any) => location.pathname === pathname;

  const isLoginPage = isActive('/login');

  console.log(isActive('/login') ? 'salmon' : 'white');
  return (
    <>
      <Box bgGradient='linear(to-r, green.300, teal.300)' py={4}>
        <Flex maxW='6xl' mx='auto' px={20}>
          <Image src={logo} boxSize='60px' />
          <Heading size='lg' pt={2} color='white'>
            <Link as={NavLink} to='/'>
              <Text display='inline'>AQG</Text>
            </Link>
          </Heading>

          <Spacer />
          <Box pt={2} display='flex'>
            <Heading size='md' color='white' mr={4} display='inline'>
              <Box width='80px'>
                <Link
                  as={NavLink}
                  to='/'
                  colorScheme={isActive('/') ? 'orange.200' : 'white'}
                >
                  Home
                </Link>
              </Box>
            </Heading>

            {isLoginPage ? (
              <Heading size='md' color='white' mr={4} display='inline'>
                <Box width='80px'>
                  <Link
                    as={NavLink}
                    to='/register'
                    colorScheme={isActive('/login') ? 'salmon' : 'white'}
                  >
                    Register
                  </Link>
                </Box>
              </Heading>
            ) : (
              <Heading size='md' color='white' mr={4} display='inline'>
                <Box width='80px'>
                  <Link
                    as={NavLink}
                    to='/login'
                    colorScheme={isActive('/login') ? 'salmon' : 'white'}
                  >
                    Login
                  </Link>
                </Box>
              </Heading>
            )}
            <Heading size='md' color='white' display='inline'>
              <Box width='80px'>
                <Link
                  as={NavLink}
                  to='/subjects'
                  colorScheme={isActive('/subjects') ? 'salmon' : 'white'}
                >
                  Subjects
                </Link>
              </Box>
            </Heading>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
