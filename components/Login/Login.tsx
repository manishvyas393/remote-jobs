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
      nameForPassword: any,
      valueForEmail: any,
      valueForPassword: any,
      onSubmit: any,
      onChangeEmail: any,
      onChangePassword: any,
      errMsg: string
}
const Login = ({ nameForEmail, nameForPassword, valueForEmail, valueForPassword, onSubmit, onChangeEmail, onChangePassword, errMsg }: Props) => {
      return (
            <Flex
                  minH={'90vh'}
                  alignItems={'center'}
                  justifyContent="center"
                  width={{ sm: "435px", lg: "102%", md: "100%", xs: "600px" }}
                  bg={useColorModeValue('gray.50', 'gray.800')}>
                  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="100%">
                        <Stack align={'center'}>
                              <Heading fontSize={'4xl'} color="gray.600">Log In</Heading>
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
                                    <FormControl id="password">
                                          <FormLabel>Password</FormLabel>
                                          <Input type="password" name={nameForPassword} value={valueForPassword} onChange={onChangePassword} />
                                    </FormControl>
                                    <Stack spacing={10}>
                                          <Box display="flex" px={2} justifyContent="space-between">
                                                <Link href="/register" passHref>
                                                      <Text fontSize="14px" fontWeight={600} color="blue.500" cursor={"pointer"}>Create an account?</Text>
                                                </Link>
                                                <Link href="/forgotpassword" passHref>
                                                      <Text fontSize="14px" fontWeight={600} color="red.500" cursor={"pointer"}>Forgot Password?</Text>
                                                </Link>
                                    </Box>
                                    <Button
                                          bg={'blue.400'}
                                          mt={4}
                                          onClick={onSubmit}
                                          color={'white'}
                                          _hover={{
                                                bg: 'blue.500',
                                          }}>
                                          Log in
                                    </Button>
                              </Stack>
                  </Stack>
            </Box>
                  </Stack >
            </Flex >
      );
}

export default Login