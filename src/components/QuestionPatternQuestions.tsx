import {
  Box,
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import useResult from '../hooks/useResult';

const QuestionPatternQuestions = () => {
  const { subjects, error } = useResult();
  const tableWidth = useBreakpointValue({ base: '100%', sm: 'auto' });
  const tableMaxWidth = useBreakpointValue({ base: '100%', sm: '800px' });

  const navigate = useNavigate();

  return (
    <>
      {error && <p>{error}</p>}

      <Box overflowX='auto'>
        <Button mb={1} colorScheme='green' size='lg'>
          Add Subject
        </Button>
        <Table
          variant='striped'
          colorScheme='teal'
          width={tableWidth}
          maxWidth={tableMaxWidth}
        >
          <TableCaption>Subjects</TableCaption>
          <Thead>
            <Tr>
              <Th minWidth={{ base: '50%', sm: '120px' }}>SL/No</Th>
              <Th minWidth={{ base: '50%', sm: '120px' }}>Title</Th>
              <Th minWidth={{ base: '50%', sm: '120px' }}>Course Code</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {subjects.map((subject) => (
              <Tr key={subject.id}>
                <Td
                  border='1px'
                  minWidth={{ base: '50%', sm: '120px' }}
                  borderColor='gray.200'
                >
                  {subject.id}
                </Td>
                <Td
                  border='1px'
                  minWidth={{ base: '50%', sm: '120px' }}
                  borderColor='gray.200'
                >
                  {subject.title}
                </Td>
                <Td
                  border='1px'
                  minWidth={{ base: '50%', sm: '120px' }}
                  borderColor='gray.200'
                >
                  {subject.id}
                </Td>
                <Td border='1px' borderColor='gray.200'>
                  <Button
                    colorScheme='whatsapp'
                    size='md'
                    w='180px'
                    mr={2}
                    mb={1}
                    onClick={() => navigate('/')}
                  >
                    Questions
                  </Button>
                  <Button mb={1} colorScheme='purple' size='md' w='180px'>
                    Question Pattern
                  </Button>
                  <Button
                    mb={1}
                    color='white'
                    colorScheme='cyan'
                    size='md'
                    w='180px'
                  >
                    Edit Subject
                  </Button>
                  <Button colorScheme='red' size='md' w='180px'>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default QuestionPatternQuestions;
