import React, { useEffect, useState } from 'react';
import { Box, Flex, MenuIcon, Text, Stack, Button } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavLink from '../NavLink/NavLink';
import { signOut } from "next-auth/react"
import { getCookies,setCookies,removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';
interface Props {
      auth: string
}
const NavBar = () => {
      const [isOpen, setOpen] = useState(false)
      const cookie=getCookies()
      let session: any
      const toggle = (e: { preventDefault: () => void; }) => {
            e.preventDefault()
            setOpen(!isOpen)
      }
      const logout = (e:any) => {
            e.preventDefault()
            removeCookies("token")
      }
      if (typeof window !== 'undefined') {
            console.log('we are running on the client')
            session = JSON.parse(localStorage.getItem("session") || '{}')
      } else {
            console.log('we are running on the server');
      }
     
      return (
            <Flex
                  as="nav"
                  align="center"
                  justify="space-between"
                  wrap="wrap"
                  w="100%"
                  mb={8}
                  py={6}
                  px={{ sm: 6, md: 20, xs: 6 }}
                  bg={["gray.100"]}
                  position="fixed"
                  boxShadow="md"
            >
                  <Box>
                        <NavLink href='/' name="Remote Jobs" fontSize={{ md: "3xl", sm: "2xl", xs: "3xl" }} onClick={null} />
                  </Box>
                  <Box display={{ base: "block", md: "block", lg: "none" }} onClick={toggle} transition="all">
                        {
                              isOpen ? <CloseIcon fontSize="3xl" /> : <HamburgerIcon fontSize="3xl" />
                        }

                  </Box>
                  <Box
                        display={{ base: isOpen ? "block" : "none", lg: "block", md: isOpen ? "block" : "none" }}
                        flexBasis={{ base: "100%", md: "auto" }}
                  >
                        <Flex
                              width={{ lg: 300, md: 360 }}
                              justifyContent={{ lg: "space-around", md: "center", sm: "center", xs: "center" }}
                              alignItems={{ lg: "flex-end", md: "center", sm: "center", xs: "center" }}
                              direction={{ lg: "row", md: "column", sm: "column", xs: "column" }}
                              pt={[4, 4, 0, 0]} mr={{ md: 50 }}>
                              <NavLink href='/' name="Home" fontSize={{ sm: "2xl", lg: "xl", md: "xl", xs: "3xl" }} onClick={null} />
                              <NavLink href='/' name="About" fontSize={{ sm: "2xl", lg: "xl", md: "xl", xs: "3xl" }} onClick={null} />
                              {
                                    session?.user || cookie?.token ? <NavLink href='/login' name="Logout" fontSize={{ sm: "2xl", lg: "xl", md: "xl", xs: "3xl" }} onClick={session?.user ? () => signOut({ callbackUrl: '/login' }) : cookie?.token?logout:null} /> :
                                          <NavLink href='/login' name="Login" fontSize={{ sm: "2xl", lg: "xl", md: "xl", xs: "3xl" }} onClick={null} />
                              }

                        </Flex>
                  </Box>
            </Flex>
      );
};

export default NavBar;
