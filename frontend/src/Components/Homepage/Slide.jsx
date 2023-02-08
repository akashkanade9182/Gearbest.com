import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"
import { Image, Box } from "@chakra-ui/react";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 1700,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"

    };
    return (
        <Box w="100%" display="flex" >
            <Box className="sliderow" w="40%" bg="red" h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                <img src="https://img.gkbcdn.com/bn/2301/1-63b3c1912b40c93798353278._p1_.jpg" alt="" />
            </Box>
            <Slider {...settings} style={{ width: "60%", margin: 'auto' ,position:"absolute",left:"40%",right:"25%"}}>

                <Box h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image objectFit="cover" w="full" h="full" src="https://img.gkbcdn.com/bn/2301/740x670-63c756962b40c94fdcbe6133._p1_.jpg" alt="Image 1" />
                </Box>

                <Box h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://img.gkbcdn.com/bn/2301/740x670-63c756462b40c94fdcbe6130._p1_.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://img.gkbcdn.com/bn/2301/740x670-63c794e42b40c94fdc0205fa._p1_.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://img.gkbcdn.com/bn/2301/740x670-63bd30fc2b40c92850228adf._p1_.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'250px',sm:"250px",md:'250px',lg:'500px'}}>
                    <Image w="full" h="full" src="https://img.gkbcdn.com/s3/bn/2301/740x670-63c672622b40c93948d5019a.jpg" alt="Image 2" />
                </Box>

              
            </Slider>
           
        </Box>
    );
}
export default Slide