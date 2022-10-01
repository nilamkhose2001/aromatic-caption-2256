import Navbar from "../Components/NewsNavbar"
import {useState} from "react"
import axios from "axios"
import {
    Button,
    Container,
   Stack,
    Input
  } from '@chakra-ui/react'
import { Navigate } from "react-router-dom"
export default function Login()
{
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [isAuth,setAuth]=useState(false)
    function handleClick()
    {

        let user={email,password}
        axios.post("https://reqres.in/api/login",user).then((res)=>{
            alert(`Now you are Logged in and your token is: ${res.data.token} click on ok to proceed`)
            setAuth(true)
        }).catch((err)=>alert(`${err} please check your credentials`))
    }
    if(isAuth)
    {
        return <Navigate to="/" />
    }
    return <>
    <Navbar />
   

  <Container borderRadius={5} maxW='md' mt="10%" bg="#68D391" p="4%">
    
  <Stack spacing={3}>
 
  <Input value={email} type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <Input value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
</Stack>
     
      <Button onClick={handleClick} mt="4%">Submit</Button>
      
   </Container>

    </>
}