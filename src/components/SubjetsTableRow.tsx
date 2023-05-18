import { Button, Td, Tr } from '@chakra-ui/react';

import { Subject } from '../hooks/useResult';

interface Props {
  subject: Subject;
}

const SubjetsTableRow = ({ subject }: Props) => {
  return (
    <>
      <Tr>
        <Td border='1px' minWidth='120px' borderColor='gray.200'>
          {subject.title}
        </Td>
        <Td border='1px' minWidth='120px' borderColor='gray.200'>
          {subject.id}
        </Td>

        <Td border='1px' borderColor='gray.200'>
          <Button colorScheme='whatsapp'>Questions</Button>
          <Button colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
    </>
  );
};

export default SubjetsTableRow;
