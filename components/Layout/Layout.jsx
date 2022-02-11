import { ClassNames } from '@emotion/react';
import React from 'react';
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
const Layout = ({ children }) => {
      return (
            <>
                  <NavBar/>
                  <div style={{paddingTop:"150px"}}>
                        {children}
                  </div>
                  <Footer/>
                        
                  
            </>

      );
};

export default Layout;
