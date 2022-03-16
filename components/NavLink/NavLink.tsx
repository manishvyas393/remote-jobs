import React from 'react'
import Link from 'next/link'
import { Button, Text } from '@chakra-ui/react'
interface Props {
      href: string,
      name: string,
      fontSize: any,
      onClick:any
}
const NavLink = ({ href, name ,fontSize,onClick}: Props) => {
      return (
            <Link href={href} passHref>
                  <Button backgroundColor={"transparent"} _hover={{backgroundColor:"transparent"}} onClick={onClick}>
                        <Text fontSize={fontSize} cursor="pointer" pl={2}>
                              {name}
                        </Text>
                  </Button>
                 
            </Link>
      )
}

export default NavLink