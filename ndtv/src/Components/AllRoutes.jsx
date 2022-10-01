import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import India from "../Pages/India";
import Login from "../Pages/Login";
export default function AllRoutes()
{
    return <>
   
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/india" element={<India />}></Route>
           <Route path="/login" element={<Login/>}></Route>
        </Routes>
 
    
    </>
}