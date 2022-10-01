import { useState } from "react"
import {Flex,Box,Image,Text, Input,Menu,MenuItem,Button,MenuList,MenuButton} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"
import styles  from "./Navbar.module.css"
export default function Navbar({handleChange})
{
    
   const [text,setText]=useState("")
   
   
    const handleClick=()=>{
        handleChange(text)
        setText("")
    }
    return <>
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"></link>
    <Flex className={styles.outerFlex}>

<Box  className={styles.innerBoxStyles} >
   <Link  to="/">
    <Image className={styles.image}  mt="20%" src="https://static.businessworld.in/article/article_large_image/1646467449_3CWGV5_ndtv.png" alt="logo"/>
   </Link>
</Box>
<Box  className={`${styles.innerBoxStyles} ${styles.res}` }>
    <Link to="/">
        <Text className={styles.upper} >BUSINESS</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> LIVE TV</Text>
    </Link>


</Box>
<Box  className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} > MOVIES</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> LATEST</Text>
    </Link>
</Box>
<Box  className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} >CRICKET</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> INDIA</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` } w="5%">

<Link to="/">
<Text className={styles.upper} > TECH</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}>CIVID</Text>
    </Link>
</Box>
<Box  className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} > FOOD</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}>OPINION</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} > WEB STORIES</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> VIDEO</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} > EDUCATION</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> CITIES</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` } w="5%">

<Link  to="/">
<Text className={styles.upper} >AUTO</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> WORD</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} >SWASTH</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> OFFBEAT</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` }>

<Link  to="/">
<Text className={styles.upper} > LIFESTYLE</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}>TRENDS</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` } >

<Link  to="/">
<Text className={styles.upper} > HEALTH</Text>
    </Link>
    <Link  to="/">
    <Text className={styles.lower}> PHOTOS</Text>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` } w="5%" color="white" >

<Link  to="/">
<Text className={styles.upper} >SHOPPING</Text>
    </Link>
    <Link to="/">
    <i class="fa-brands fa-twitter" style={{color:"white"}}></i>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.inp}`}  >

    <Link to="/">
        <Text className={styles.upper} > ART</Text>
    </Link>
    <Box  display="flex" alignItems="center" p="1px">
        <Input size='xs' placeholder="Search" mr="5px" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <i style={{color:"white"}} onClick={handleClick} class="fa-solid fa-magnifying-glass"></i>
    </Box>
 
    
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.res}` }>
    <Link to="/login"  >
    <i style={{color:"white",marginTop:"10px"}} class="fa-solid fa-user"></i>
    <p style={{fontSize:"10px"}}>Log-In</p>
    </Link>
    </Box>

    <Box className={styles.men}>
    <Menu >
  <MenuButton as={Button} w="1px" mt="30%" bg="#3E3E3E" p={0}>
    <HamburgerIcon ml="0px" w={6} h={6} style={{color:"white"}} />
  </MenuButton>
  <MenuList bg="#3E3E3E" style={{color:"white"}}>
    <MenuItem>Live Tv</MenuItem>
    <MenuItem>Latest</MenuItem>
    <MenuItem>India</MenuItem>
    <MenuItem>Covid</MenuItem>
    <MenuItem>Opinion</MenuItem>
    <MenuItem>Video</MenuItem>
    <MenuItem>Cities</MenuItem>
    <MenuItem>Word</MenuItem>
    <MenuItem>Offbeat</MenuItem>
    <MenuItem>Trends</MenuItem>
    <MenuItem>Photos</MenuItem>
    <MenuItem>Health</MenuItem>
  </MenuList>
</Menu>
    </Box>

</Flex>

    </>
}