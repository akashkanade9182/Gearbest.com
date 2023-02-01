import React ,{useEffect,useState}from 'react'
import { Box, Button } from '@chakra-ui/react'
import axios from "axios"
import "../styles/Hompage.css"

import Navbar from '../Components/Navbar/Navbar'
import Slide from '../Components/Homepage/Slide'
import Productgrid from "../Components/Homepage/Productgrid"
import Footer from '../Components/Footer'





const getMobile=()=>{
  // return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?search=mobile&page=1&limit=8`)
}
const getLaptop=()=>{
  // return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?search=laptop&headpone&page=1&limit=8`)
}


const Homepage = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <Navbar/>
    <Box w="98%" h="500px"  m="auto"  mt="10px">
      <Slide/>
      <Box w="100%" m="auto" mt="20px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <img src="https://img.gkbcdn.com/bn/2212/5-63ac10cc2b40c966cc189a8e._p1_.jpg" alt="err" />
      </Box>
      <Productgrid/>
      <button
      className={`scroll-to-top-button ${showButton ? "show-scroll-to-top-button" : ""}`}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="9" x2="12" y2="5" />
  <line x1="8" y1="9" x2="12" y2="5" />
</svg>
    </button>
      
    <Footer/>

    </Box>
 
    
  
    </>
  )
}

export default Homepage