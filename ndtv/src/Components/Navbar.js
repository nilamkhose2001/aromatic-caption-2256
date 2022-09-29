import { useState } from "react"
import {Flex,Box,Image,Text, Input} from "@chakra-ui/react"
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
    <Link  to="/india">
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
<Box className={`${styles.innerBoxStyles} ${styles.res}` } w="5%" >

<Link  to="/">
<Text className={styles.upper} >SHOPPING</Text>
    </Link>
    <Link to="/">
    <i class="fa-brands fa-twitter"></i>
    </Link>
</Box>
<Box className={`${styles.innerBoxStyles} ${styles.inp}`}  >

    <Link to="/">
        <Text className={styles.upper} > ART</Text>
    </Link>
    <Box  display="flex" alignItems="center" p="1px">
        <Input size='xs' placeholder="Search" mr="5px" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <i onClick={handleClick} class="fa-solid fa-magnifying-glass"></i>
    </Box>
 
    
</Box>

</Flex>

    </>
}