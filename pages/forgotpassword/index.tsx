import axios from 'axios'
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'
import { useState } from 'react'
const Index = () => {
      const [forgotEmail, setEmail] = useState("")
      const [err,setErr]=useState("")
      const submit = async(e:any) => {
            e.preventDefault()
            await axios.post("/api/auth", {forgotEmail}).then((res) => {
                  if (res.data.data.err) {
                        setErr(res.data.data.err)
                  }
                  if (res.data.data.success) {
                        setErr("Link sent check your mail")
                  }
            })
            
      }
  return (
        <ForgotPassword
              nameForEmail="email"
              valueForEmail={forgotEmail}
              onChangeEmail={(e: any) => setEmail(e.target.value)}
              onSubmit={submit}
              errMsg={err}
        />
  )
}

export default Index