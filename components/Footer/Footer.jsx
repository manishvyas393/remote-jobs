import React from 'react'
import NavLink from "../NavLink/NavLink"
import { Flex, Box, Heading, Text } from "@chakra-ui/react"
const Footer = () => {
      return (
            <Box display="flex" flexDirection={{ lg: "row", sm: "column" ,md:"row",xs:"column"}} w={{lg:"100%",sm:"124%",md:"100%",xs:"205%"}} backgroundColor={["gray.100"]} height={350} p={{ lg: "50px", sm: "10px" }} mt="5" justifyContent="center" alignItems="center" shadow="inner">
                  <Box display="flex" w={{ lg: "50%", sm: "100%", xs: "100%" }} px={{ lg: 54, sm: 0 }} justifyContent="space-around" mt={6}>
                        <Box display="flex" flexDirection="column">
                              <Text>logo</Text>
                              <Text>© 2020.All rights reserved</Text>
                        </Box>
                        <Box display="flex" flexDirection="column">
                              <Heading as="h5" fontSize={{ sm: 28, lg: 35, md: 25 }} fontWeight={{ sm: 300 }} mb={4}>Products</Heading>
                              <NavLink href="/" name='Overview' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='Features' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='pricing' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />

                        </Box>
                  </Box>
                  <Box display="flex" w={{ lg: "50%", sm: "100%",xs:"100%" }} px={{ lg: 54, sm:0}} justifyContent="space-around" mt={6}>
                        <Box display="flex" flexDirection="column">
                              <Heading as="h5" fontSize={{ sm: 28, lg: 35, md: 25 }} fontWeight={{ sm: 300 }} mb={4}>Support</Heading>
                              <NavLink href="/" name='Help Centre' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='Terms Of Service' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='Privacy Policy' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                        </Box>
                        <Box display="flex" flexDirection="column">
                              <Heading as="h5" fontSize={{ sm: 28, lg: 35, md: 25 }} fontWeight={{ sm: 300 }} mb={4}>Follow Us</Heading>
                              <NavLink href="/" name='Instagram' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='LinkedIn' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                              <NavLink href="/" name='Facebook' fontSize={{ sm: "16px", lg: "17px", md: "18px" }} />
                        </Box>

                  </Box>
            </Box>
      )
}

export default Footer