import { Box, Button, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';

interface Props {
  url: string;
}

const QuestionGenerationCard = ({ url }: Props) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
      textAlign='center'
    >
      <Flex justifyContent='center' alignItems='center' mb={5}>
        <Icon as={FaFilePdf} w={12} h={12} />
      </Flex>
      <Button colorScheme='blue' size='md' onClick={() => window.open(url)}>
        Download PDF
      </Button>
    </Box>
  );
};

const QuestionGenerate = () => {
  const pdfUrls = [
    'https://example.com/pdf1.pdf',
    'https://example.com/pdf2.pdf',
    'https://example.com/pdf3.pdf',
  ];

  return (
    <Box p={10}>
      <Button colorScheme='orange' m='2' size='lg'>
        Generate Question
      </Button>
      <Heading as='h1' size='2xl' mb={10}>
        List of PDFs
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {pdfUrls.map((url, index) => (
          <QuestionGenerationCard key={index} url={url} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuestionGenerate;
