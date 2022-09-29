import styles from "./Home.module.css"
import {useState,useEffect,useContext} from "react"
import Navbar from "../Components/Navbar"
import axios from "axios"
import Footer from "../Components/Footer"
import { SimpleGrid,Box,Image, Heading ,Text, Flex} from "@chakra-ui/react"
import { AppContext } from "../Components/AppContext"
import { Navigate } from "react-router-dom"
const getData=(q="us")=>{
    return axios(`https://masai-api.herokuapp.com/news/top-headlines?country=${q}`)
}
export default function Home(){
const [loading,setLoading]=useState(false)
const [text,setText]=useState("us")
const [data,setData]=useState([])
const [story,setStory]=useState([])
const {handleNews}=useContext(AppContext)
//console.log(handleNews)


const handleChange=(value)=>{
    setText(value)
}
useEffect(()=>{
    setLoading(true)
    getData(text).then((res)=>{
        console.log(res.data.articles)
        setData(res.data.articles)
        getData2(text).then(res=>setStory(res.data.articles))
        setLoading(false)
    })
},[text])
const getData2=(q)=>{
    return axios(`https://newsapi.org/v2/top-headlines?pageSize=4&apiKey=45e05ac5e8624919b1a3f93425afd0fc&country=${q}`)
}

const handleClick=(el)=>
{
    handleNews(el)
    console.log("nilam")
    return <>
    <Navigate to="/india" />
    </> 
   
}
    return <>
     <Navbar handleChange={handleChange}/>

    { loading?<Heading textAlign="center">Loading...</Heading>:<Flex className={styles.story} gap='2' mt="20px" backgroundColor="#EAEAEA">
        {
           
            story?.map(el=>{
                return <Box onClick={()=>handleClick(el)} backgroundColor="white">
                    <Image height="50%" width="100%" borderRadius="5px 5px 0px 0px" src={el.urlToImage} alt={el.title} />
                    

                    <Heading as='h5' size='sm'>{el.title}</Heading>
                </Box>
            })
        }
</Flex>}
{ loading?<Heading textAlign="center"></Heading>:<SimpleGrid className={styles.carts} columns={{ base: 1, sm: 1, md: 2, lg: 3}} spacing='10px'>
        {
            data?.map(el=>{
                return <Box onClick={()=>handleClick(el)} className={styles.Box} key={el.title}>
                    <Image height="50%" width="100%" borderRadius="5px 5px 0px 0px" src={el.urlToImage} alt={el.title} />
                    
                    <Heading as='h5' size='sm'>{el.title}</Heading>
                    <Text fontSize='xs'>{el.description}</Text>
                </Box>
            })

        }
  
</SimpleGrid>}


{ loading?<Heading textAlign="center"></Heading>:<Flex className={styles.story} gap='2' mt="20px" backgroundColor="#EAEAEA">
        {
           
            story?.map(el=>{
                return <Box onClick={()=>handleClick(el)} backgroundColor="white">
                    <Image height="50%" width="100%" borderRadius="5px 5px 0px 0px" src={el.urlToImage} alt={el.title} />
                    

                    <Heading as='h5' size='sm'>{el.title}</Heading>
                </Box>
            })
        }
</Flex>}
<Footer />
    </>
}

// https://masai-api.herokuapp.com/news?q=${query}
// `https://masai-api.herokuapp.com/news/top-headlines?country=${id}