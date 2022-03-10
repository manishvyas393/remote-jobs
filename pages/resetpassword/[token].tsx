import { useState } from 'react'
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import axios from 'axios'
import { useRouter } from 'next/router'
interface Props {
      params: {
            token: string;
      };
      token:string
}
export const getServerSideProps = async ({ params }: Props) => {
      const token = params.token;
      return {
            props: {
                  token,
            },
      };
};
const Index = ({token}:Props) => {
      console.log(token)
      const router = useRouter()
      const [resetPassword, setPassword] = useState("")
      const [confirmPassword, setConfirmPassword] = useState("")
      const [err, setErr] = useState("")
      const resetPasswordHandle = async (e: any) => {
            e.preventDefault()
            if (resetPassword === ""|| confirmPassword==="") {
                  setErr("Please enter password")
            }
            else if (resetPassword.length <= 8||confirmPassword.length<=8) {
                  setErr("password length should be more than 8")
            }
            else if (resetPassword !== confirmPassword) {
                  setErr("password not matched")
                  }
            else {
                  await axios.post("/api/auth", {token,resetPassword}).then((data) => {

                        if (data.data.data.success) {
                              router.push("/login")
                        }
                        if (data.data.err) {
                              setErr(data.data.err)
                        }
                  })
            }

      }
      return (
            <ResetPassword
                  valueForPassword={resetPassword}
                  valueForPassword2={confirmPassword}
                  onChangePassword2={(e: any) => setConfirmPassword(e.target.value)}
                  onChangePassword={(e: any) => setPassword(e.target.value)}
                  onSubmit={resetPasswordHandle}
                  errMsg={err}
            />
      )
}

export default Index