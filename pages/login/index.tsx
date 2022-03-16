import { useEffect, useState } from 'react'
import Login from '../../components/Login/Login'
import axios from 'axios'
import { useRouter } from 'next/router'
import { loginUser } from '../../service/auth'
import { getSession } from 'next-auth/react'
interface session{
      session:any
}
const Index = ({session}:session) => {
      const router = useRouter()
      const [loginEmail, setEmail] = useState("")
      const [loginPassword, setPassword] = useState("")
      const [err, setErr] = useState("")
      
      const signUp = async (e: any) => {
            e.preventDefault()
            if (loginPassword === "") {
                  setErr("Please enter password")
            }
            else if (loginPassword.length <= 8) {
                  setErr("password length should be more than 8")
            }
            else if (loginEmail === "") {
                  setErr("Email cannot be blank")
            }
            else {
                  await axios.post("/api/auth", { loginEmail, loginPassword }).then((data) => {
                        if (data.data.data.success) {
                              router.push("/")
                        }
                        if (data.data.err) {
                              setErr(data.data.err)
                        }
                  })
            }

      }
      useEffect(() => {
            if (session?.user?.email) {
                  router.push("/")
            }
            if (session?.user) {
                  localStorage.setItem("session", JSON.stringify(session))
            }
            else {
                  localStorage.clear()
            }
      },[session?.user?.email,router])
      return (
            <Login
                  nameForEmail="email"
                  nameForPassword="password"
                  valueForEmail={loginEmail}
                  valueForPassword={loginPassword}
                  onChangeEmail={(e: any) => setEmail(e.target.value)}
                  onChangePassword={(e: any) => setPassword(e.target.value)}
                  onSubmit={signUp}
                  errMsg={err}
            />
      )
}

export default Index
export async function getServerSideProps(context: any) {
      const session = await getSession(context)
      return {
            props: {
                  session,
            },
      };
}