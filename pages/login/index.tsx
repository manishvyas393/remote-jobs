import { useState } from 'react'
import Login from '../../components/Login/Login'
import axios from 'axios'
import { useRouter } from 'next/router'
const index = () => {
      const router = useRouter()
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [err, setErr] = useState("")
      const signUp = async (e: any) => {
            e.preventDefault()
            console.log(password.length)
            if (password === "") {
                  setErr("Please enter password")
            }
            else if (password.length <= 8) {
                  setErr("password length should be more than 8")
            }
            else if (email === "") {
                  setErr("Email cannot be blank")
            }

      }
      return (
            <Login
                  nameForEmail="email"
                  nameForPassword="password"
                  valueForEmail={email}
                  valueForPassword={password}
                  onChangeEmail={(e: any) => setEmail(e.target.value)}
                  onChangePassword={(e: any) => setPassword(e.target.value)}
                  onSubmit={signUp}
                  errMsg={err}
            />
      )
}

export default index