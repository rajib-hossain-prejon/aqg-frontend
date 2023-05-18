import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const data = [
  { id: 1, name: 'John Doe', age: 25, email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', age: 30, email: 'janesmith@example.com' },
  { id: 3, name: 'Bob Johnson', age: 35, email: 'bobjohnson@example.com' },
];

const TableMain = () => {
  return (
    <Box overflowX='auto'>
      <Table variant='striped'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>
                <Text fontWeight='bold'>Extra row:</Text> {row.name}
              </Td>
              <Td>
                <Text fontWeight='bold'>Name:</Text> {row.name}
              </Td>
              <Td>
                <Text fontWeight='bold'>Email:</Text> {row.email}
              </Td>
              <Td>
                <Button>Submite</Button>
                <Button>Submite</Button>
                <Button>Submite</Button>
                <Button>Submite</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableMain;
