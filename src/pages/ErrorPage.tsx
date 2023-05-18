import { Box, Button, Heading, Text } from '@chakra-ui/react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <Box p={10}>
      <Heading as='h1' size='2xl' mb={5}>
        Oops! Something went wrong.
      </Heading>
      <Text fontSize='lg' mb={5}>
        {isRouteErrorResponse(error) ? 'Invalid Page' : 'Unexpected Error'}
      </Text>
      <Button colorScheme='blue' onClick={() => navigate('/')}>
        HomePage
      </Button>
    </Box>
  );
};

export default ErrorPage;
