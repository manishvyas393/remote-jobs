import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/Layout/Layout"
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
const breakpoints = createBreakpoints({
  xs: "200px",
  sm: '320px',
  md: "500px",
  lg: '768px',
  xl: '960px',
  "2xl": '1200px',
  "3xl": '1536px',
})
const theme = extendTheme({ breakpoints })
function MyApp({ Component, pageProps, }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp

