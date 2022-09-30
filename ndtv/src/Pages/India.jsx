import Navbar from "../Components/NewsNavbar"
import { AppContext } from "../Components/AppContext"
import { useContext } from "react"
import Footer from "../Components/Footer"
import {Image,Heading,Text,Container,Box,Flex} from "@chakra-ui/react"
import styles from "./India.module.css"
export default function India()
{

    const {news}=useContext(AppContext)
    
    return <div>
    <Navbar />
   
    <Container maxW='100%' >
    <Heading>{news.title}</Heading>
    <Flex mt="2%" gap={4} className={styles.flex}>
        <Box  className={styles.f1}>
            <Text textAlign="left">
                {news.author}
            </Text>
            <Text textAlign="left">
                {
                    news.content
                }
            </Text>
            <Text fontSize='xs' pb="0px" textAlign="left">
                {
                    news.content
                }
            </Text>
        </Box>
    <div className={styles.img} pb="0px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <Image height="50%" width="100%" borderRadius="5px 5px 0px 0px" src={news.urlToImage} alt={news.title} />
                    
                    <Heading as='h5' size='sm'>{news.title}</Heading>
                    <Text fontSize='xs'>{news.description}</Text>
                 
        </div>
        <Box  className={styles.f1}>
        <Text textAlign="left">
                {news.publishedAt}
            </Text>
            <Text textAlign="left">
                {
                    news.description
                }

            </Text>
            {/* <Text fontSize='xs' pb="0px" textAlign="left">
                {
                    news.content
                }
            </Text> */}
        </Box>
    </Flex>
        
           
    </Container>
        <Footer />
    
    </div> 
}