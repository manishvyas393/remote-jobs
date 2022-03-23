import React, { useState } from 'react'
import {
      Flex,
      Box,
      FormControl,
      FormLabel,
      Input,
      Checkbox,
      Stack,
      Button,
      Heading,
      Text,
      useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
interface Props {
      nameForEmail: any,
      valueForEmail: any,
      onSubmit: any,
      onChangeEmail: any,
      errMsg: string
}
const ForgotPassword = ({ nameForEmail,valueForEmail, onSubmit, onChangeEmail,errMsg }: Props) => {
      return (
            <Flex
                  minH={'90vh'}
                  alignItems={'center'}
                  justifyContent="center"
                  width={{ sm: "435px", lg: "102%", md: "100%", xs: "600px" }}
                  bg={useColorModeValue('gray.50', 'gray.800')}>
                  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="90%" mt={12}>
                        <Stack align={'center'}>
                              <Heading fontSize={'4xl'} color="gray.600">Forgot Password</Heading>
                        </Stack>
                        <Box bgColor="tomato">
                              <Text align="center" color="white" fontSize={20} fontWeight={600}>{errMsg}</Text>
                        </Box>

                        <Box
                              rounded={'lg'}
                              bg={useColorModeValue('white', 'gray.700')}
                              boxShadow={'lg'}
                              p={4}>

                              <Stack spacing={4}>
                                    <FormControl id="email">
                                          <FormLabel>Email address</FormLabel>
                                          <Input type="email" name={nameForEmail} value={valueForEmail} onChange={onChangeEmail} />
                                    </FormControl>
                                    <Stack spacing={10}>
                                          <Button
                                                bg={'blue.400'}
                                                mt={4}
                                                onClick={onSubmit}
                                                color={'white'}
                                                _hover={{
                                                      bg: 'blue.500',
                                                }}>
                                                Send reset link
                                          </Button>
                                    </Stack>
                              </Stack>
                        </Box>
                  </Stack >
            </Flex >
      );
}

export default ForgotPassword