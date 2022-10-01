import {Flex,Box,Image,Text,Input} from "@chakra-ui/react"
import styles from "./Footer.module.css"
import {useState} from "react"
export default function Footer({handleChange})
{
  const [text,setText]=useState("")
   
   
  const handleClick=()=>{
      handleChange(text)
      setText("")
  }

    return <>
         <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"></link>

      <Flex className={styles.footer} gap={1} bg=" #EAEAEA" w="100%" >
        <Box  className={styles.b1}>
        <Image className={styles.image}   src="https://static.businessworld.in/article/article_large_image/1646467449_3CWGV5_ndtv.png" alt="logo"/>
    <Text fontSize="xs" textAlign="left" ml="10%"> FOLLOW US ON</Text>
    <Flex mt="5%" ml="10%" gap={4}>
    <i style={{color:"black"}} class="fa-brands fa-facebook"></i>
    <i style={{color:"black"}} class="fa-brands fa-twitter"></i>
    <i style={{color:"black"}} class="fa-brands fa-instagram"></i>
        <i style={{color:"black"}} class="fa-brands fa-linkedin"></i>
    </Flex>
    <Flex w="65%" bg="white" ml="10%" mt="4%" p="1%" className={styles.icon} >
    <Input p="9%" border="none" bg="white" size='xs' placeholder="Search"  type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <i style={{color:"black"}} onClick={handleClick} class="fa-solid fa-magnifying-glass" ></i>
    </Flex>
        </Box>
        
        <Box className={styles.b2} bg="#EAEAEA">
          <Flex mt="2%" fontFamily="Roboto, sans-serif;" fontSize="11px" fontWeight="400" className={styles.f2} w="100%">
            <Text >ABOUT US</Text>
            <Text>ADVERTISE</Text>
            <Text>BRAND AMP</Text>
            <Text>EPG SERVICES</Text>
            <Text>CHANNELS</Text>
            <Text>DISCLAIMER</Text>
            <Text>FEEDBACK</Text>
            <Text>INVESTERS</Text>
            <Text>REDRESSALS</Text>
            {/* <Text>SERVICE TERMS</Text> */}
          </Flex>
          <hr />
          <Flex fontFamily="Roboto, sans-serif;" fontSize="11px" fontWeight="400" className={styles.f2} w="100%">
            <Text color="white" bg="black" p="1px 4px">NDTV GROUP SITES</Text>
            <Text>NEWS</Text>
            <Text>BUSINESS</Text>
            <Text>HINDI</Text>
            <Text>MOVIES</Text>
            <Text>CRICKET</Text>
            <Text>FOOD</Text>
            <Text>AUTO</Text>
            <Text>TRA</Text>
            <Text>TECH</Text>
          </Flex>
          <hr />
          <Flex fontFamily="Roboto, sans-serif;" fontSize="11px" fontWeight="400" ml="1%">
            <Text p="1px 6px" borderRight="1px solid gray">THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS</Text>
            <Text p="1px 6px">&#169; COPYRIGHT NDTV CONVERGENCE LIMITED 2022.</Text>
          </Flex>
        </Box>
        

      </Flex>
 
    </>
}