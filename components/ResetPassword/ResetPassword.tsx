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
      valueForPassword: any,
      valueForPassword2: any,
      onSubmit: any,
      onChangePassword2: any,
      onChangePassword: any,
      errMsg: string
}
const ResetPassword = ({ valueForPassword, valueForPassword2,onChangePassword,onChangePassword2,onSubmit,errMsg }: Props) => {
      return (
            <Flex
                  minH={'90vh'}
                  alignItems={'center'}
                  justifyContent="center"
                  width={{ sm: "435px", lg: "102%", md: "100%", xs: "600px" }}
                  bg={useColorModeValue('gray.50', 'gray.800')}>
                  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="100%">
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
                                          <FormLabel>Enter new password</FormLabel>
                                          <Input type="email" value={valueForPassword} onChange={onChangePassword} />
                                    </FormControl>
                                    <FormControl id="password">
                                          <FormLabel>Re-Type Password</FormLabel>
                                          <Input type="password"  value={valueForPassword2} onChange={onChangePassword2} />
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
                                                Update password
                                          </Button>
                                    </Stack>
                              </Stack>
                        </Box>
                  </Stack >
            </Flex >
      );
}

export default ResetPassword