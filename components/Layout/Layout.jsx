import React from 'react';
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Box } from '@chakra-ui/react';
const Layout = ({ children}) => {
      return (
            <Box overflow="hidden"
            >
                  
                  <NavBar/>
                  <Box pt={5}>
                        {children}
                  </Box>
                  <Footer/>
            </Box>

      );
};

export default Layout;
