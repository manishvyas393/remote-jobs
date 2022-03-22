import React from 'react'
import {
      Flex,
      Box,
      FormControl,
      FormLabel,
      Input,
      Stack,
      Button,
      Heading,
      Text,
      useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { GoMarkGithub } from "react-icons/go"
import { FcGoogle } from 'react-icons/fc';
import AuthProviderBtn from '../AuthProviderBtn/AuthProviderBtn';
interface Props {
      nameForEmail: any,
      nameForName: any,
      nameForPassword: any,
      valueForEmail: any,
      valueForName: any,
      valueForPassword: any,
      onSubmit: any,
      onChangeEmail: any,
      onChangePassword: any,
      onChangeName: any,
      errMsg: string
}
const Register = ({ nameForEmail, nameForName, nameForPassword, valueForEmail, valueForName, valueForPassword, onSubmit, onChangeEmail, onChangeName, onChangePassword, errMsg }: Props) => {
      return (
            <Flex
                  minH={'90vh'}
                  alignItems={'center'}
                  justifyContent="center"
                  width={{ sm: "435px", lg: "102%", md: "100%", xs: "600px" }}
                  bg={useColorModeValue('gray.50', 'gray.800')}>
                  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="100%">
                        <Stack align={'center'}>
                              <Heading fontSize={'4xl'} color="gray.500">Create account</Heading>
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
                                    <form >
                                          <FormControl id="name">
                                                <FormLabel>Full Name</FormLabel>
                                                <Input type="text" name={nameForName} value={valueForName} onChange={onChangeName} />
                                          </FormControl>
                                          <FormControl id="email">
                                                <FormLabel>Email address</FormLabel>
                                                <Input type="email" name={nameForEmail} value={valueForEmail} onChange={onChangeEmail} />
                                          </FormControl>
                                          <FormControl id="password">
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" name={nameForPassword} value={valueForPassword} onChange={onChangePassword} />
                                          </FormControl>
                                          <Stack spacing={8}>
                                                <Box display="flex" px={2} justifyContent="space-between" mt={4}>
                                                      <Link href="/login" passHref>
                                                            <Text fontSize="14px" fontWeight={600} color="blue.500" cursor={"pointer"}>Already Have an account?</Text>
                                                      </Link>

                                                </Box>
                                                <Button
                                                      bg={'blue.400'}
                                                      mt={2}
                                                      onClick={onSubmit}
                                                      color={'white'}
                                                      _hover={{
                                                            bg: 'blue.500',
                                                      }}>
                                                      Sign in
                                                </Button>
                                                <Box>
                                                      <AuthProviderBtn btnName='Google' icon={<FcGoogle />} bg="white" txtColor='black' siginInWith="google" />
                                                      <AuthProviderBtn btnName='Github' icon={<GoMarkGithub />} bg="black" txtColor='white' siginInWith="github" />
                                                </Box>
                                          </Stack>
                                    </form>
                              </Stack>
                        </Box>
                  </Stack>
            </Flex>
      );
}

export default Register