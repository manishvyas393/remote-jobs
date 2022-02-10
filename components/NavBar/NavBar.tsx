import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Flex, MenuIcon, Text, Stack} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavLink from '../NavLink/NavLink';
const NavBar = () => {
      const [isOpen, setOpen] = useState(false)
      const toggle = (e: { preventDefault: () => void; }) => {
            e.preventDefault()
            setOpen(!isOpen)
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
                  px={{ sm: 6, md: 20,xs:6}}
                  bg={["gray.50"]}
                  position="fixed"
                  boxShadow="md"
            >
                  <Box>
                        <NavLink href='/' name="Remote Jobs" fontSize={{ md: "3xl", sm: "2xl" }} />
                  </Box>
                  <Box display={{ base: "block", md: "none" }} onClick={toggle} transition="all">
                        {
                              isOpen ? <CloseIcon fontSize="3xl" /> : <HamburgerIcon fontSize="3xl" />
                        }

                  </Box>
                  <Box
                        display={{ base: isOpen ? "block" : "none", lg: "block",md:"block" }}
                        flexBasis={{ base: "100%", md: "auto" }}
                  >
                        <Flex
                              width={{lg:250,md:200}}
                              justifyContent={{ lg: "space-around", md: "space-evenly", sm: "center",xs:"center"}}
                              alignItems={{ lg: "flex-end", md: "center",  sm: "center",xs:"center"}}
                              direction={{ lg: "row", md: "row", sm: "column",xs:"column"}}
                              pt={[4, 4, 0, 0]} mr={{ md: 50 }}>
                              <NavLink href='/' name="Home" fontSize={{ sm: "2xl", lg: "xl", md: "xl" }}/>
                              <NavLink href='/' name="About" fontSize={{ sm: "2xl", lg: "xl", md: "xl" }}/>
                              <NavLink href='/' name="Login" fontSize={{ sm: "2xl", lg: "xl", md: "xl" }}/>
                        </Flex>
                  </Box>
            </Flex>
      );
};

export default NavBar;
