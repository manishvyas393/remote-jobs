import React from 'react';
import Link from 'next/link';
import { Box, Text, Image } from '@chakra-ui/react';
interface Props {
      job: {
            _id:string,
            company: string,
            role: string,
            contract: string,
            location: string,
            updatedOn: string,
            salary:string
      };
}
const JobCard = ({ job }: Props) => {
      return (
            
            <Link href={"/jobdetail/" + job._id} key={job._id} passHref>
                  <Box p={6} display={{ md: 'flex' }}  backgroundColor="rgba(255,213,0,0.2)" m={3} width={{lg:800,md:750,sm:400,xs:550}} cursor="pointer">
                        <Box flexShrink={0}>
                              <Image
                                    borderRadius='lg'
                                    width={{ lg: 40, md: 150,sm:350}}
                                    src='https://bit.ly/2jYM25F'
                                    alt='Woman paying for a purchase'
                              />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} width="100%">
                              <Text
                                    fontWeight='bold'
                                    textTransform='uppercase'
                                    fontSize='sm'
                                    letterSpacing='wide'
                                    color='teal.600'
                              >
                              {job.company}
                              </Text>
                              <Text
                                    mt={1}
                                    display='block'
                                    fontSize='lg'
                                    lineHeight='normal'
                                    fontWeight='semibold'

                                    textDecoration="none"
                                    width={400}
                              >
                        {job.role}
                              </Text>
                              <Text mt={2} color='gray.500'>
                                    {job.location}
                              </Text>
                              <Text mt={2} color='gray.500'>
                                    {job.salary}
                              </Text>
                        </Box>
                        <Box display="flex" alignItems={{ base: "center", }} width={150}>
                              <Text textAlign="left" mt={{ sm: 2 }} color='gray.500'>
                                    {job.updatedOn}
                              </Text>
                        </Box>

                  </Box></Link>
        
      );
};

export default JobCard;
