import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Container } from '@chakra-ui/react'
import Link from 'next/link';

interface Props {
  detail: {
    _id: string,
    company: string,
    role: string,
    contract: string,
    location: string,
    updatedOn: string,
    salary: string,
    details: any
    source:string
  };
}

const JobsDetails = ({ detail }: Props) => {
 
  return (
    <Container centerContent>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" mt="100px">
        <Heading as="h1" fontSize={{ lg: 40, md: 30, sm: 20 }} color="gray.800" mb={5}>{detail.company}</Heading>
        <Box dangerouslySetInnerHTML={{__html:detail.details}} px={{sm:6}}>
        </Box>
        
        <a href={detail.source} target="_blank" rel="noreferrer" style={{marginTop:"30px"}}>
          <Button backgroundColor="teal.600" mb={5} width={{ lg: 250, sm: 350 }} color="whiteAlpha.900" _hover={{ backgroundColor: "teal.500" }}>Apply</Button>
          </a>
      </Flex>

    </Container>

  );
};

export default JobsDetails;
