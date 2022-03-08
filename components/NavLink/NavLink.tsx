import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
interface Props {
      href: string,
      name: string,
      fontSize:any
}
const NavLink = ({ href, name ,fontSize}: Props) => {
      return (
            <Link href={href} passHref>
                  <Text fontSize={fontSize} cursor="pointer" pl={2}>
                        {name}
                  </Text>
            </Link>
      )
}

export default NavLink