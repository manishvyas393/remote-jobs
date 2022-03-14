import { signIn } from "next-auth/react"
import { Button, Center, Text } from '@chakra-ui/react';
interface Props {
      icon: any,
      siginInWith: string,
      btnName: string,
      bg: string,
      txtColor:string
}
const AuthProviderBtn = ({ icon, siginInWith, btnName,bg,txtColor }: Props) => {
      return (
            <Center>
                  <Button
                        mt={4}
                        w={'full'}
                        maxW={'md'}
                        variant={'outline'}
                        backgroundColor={bg}
                        color={txtColor}
                        leftIcon={icon}
                        onClick={() => signIn(siginInWith, { callbackUrl: 'http://localhost:3000' })}
                  ><Center>
                              <Text>Sign in with {btnName}</Text>
                        </Center>
                  </Button>
            </Center>
      );

}

export default AuthProviderBtn