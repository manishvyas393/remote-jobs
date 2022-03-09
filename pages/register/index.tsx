import {useState} from 'react'
import Register from '../../components/Register/Register'
import axios from 'axios'
import { useRouter } from 'next/router'
const Index = () => {
      const router=useRouter()
      const [email, setEmail] = useState("")
      const [name, setName] = useState("")
      const [password, setPassword] = useState("")
      const [err,setErr]=useState("")
      const signUp = async(e:any) => {
            e.preventDefault()
            console.log(password.length)
            if (password === "") {
                  setErr("Please enter password")
            }
            else if (password.length <= 8) {
                  setErr("password length should be more than 8")
            }
            else if (name === "") {
                  setErr("Name field cannot be blank")
            }
            else if (email === "") {
                  setErr("Email cannot be blank")
            }
            else {
                  await axios.post("/api/auth", { name, email, password }).then((data) => {

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
            <Register
                  nameForEmail="email"
                  nameForName="name"
                  nameForPassword="password"
                  valueForName={name}
                  valueForEmail={email}
                  valueForPassword={password}
                  onChangeName={(e: any) => setName(e.target.value)}
                  onChangeEmail={(e: any) => setEmail(e.target.value)}
                  onChangePassword={(e:any)=>setPassword(e.target.value)}
                  onSubmit={signUp}
                  errMsg={err}
            />
      )
}

export default Index