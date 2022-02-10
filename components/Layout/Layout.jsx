import { ClassNames } from '@emotion/react';
import React from 'react';
import NavBar from "../NavBar/NavBar"
const Layout = ({ children }) => {
      return (
            <>
                  <NavBar/>
                  <div style={{paddingTop:"150px"}}>
                        {children}
            </div>
                        
                  
            </>

      );
};

export default Layout;
