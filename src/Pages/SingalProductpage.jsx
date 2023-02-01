

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  Spinner
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import "../Styles/productpage.css";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
// import Footers from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { EditCart, EditSingleCart, getOneProduct } from "../Redux/AppReducer/action";
import Footer from "../Components/Footer";
const SingleProductpage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount]=useState(1);
  const{id}=useParams("id");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const data=useSelector(store=>store.AppReducer.data);
  const isLoading=useSelector(store=>store.AppReducer.isLoading);


const handleAddtoCart=(id,quantity)=>{
    let newquantity =quantity+1;
    
    dispatch(EditSingleCart(id, {quanity : newquantity }))
      .then(() => {
      navigate("/cart")

      }).catch((e)=>{
        alert("something is error ,try again")
      })
}






  useEffect(() => {
 
    dispatch(getOneProduct(id));
  }, [id]);




  if (isLoading) {
    return (
      <>
      <Navbar/>
      <Box mt="40px">
        <Center>
          <Spinner/>
        </Center>
      </Box>
      {/* <Footers/> */}
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <Box  b="1px solid red">
      <br />
      {/* Top head line */}
      <Box p={3} fontSize={["xs", "xs", "xs"]} h="auto" bgColor="gray.50">
        <Flex
          w="80%"
          margin="auto"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <Text color="gray" textAlign="left" alignItems='center'>
              Home <i class='bx bx-chevron-right'></i> Consumer Electronics <i class='bx bx-chevron-right'></i> Smart Electronics <i class='bx bx-chevron-right'></i> {data.subCategory} <i class='bx bx-chevron-right'></i> {data.brand}
            </Text>
          </Box>
          <Box mr={3}>
            <Flex alignItems="center">
              <Box>
                <Flex alignItems="center">
                  <Box mr={1}>
                    <i class="bx bx-envelope"></i>{" "}
                  </Box>
                  <Box>Contact Now</Box>
                </Flex>
              </Box>
              <Box ml={3}>
                <Flex alignItems="center">
                  <Box mr={1} color="gray">
                    <i class="bx bx-heart"></i>
                  </Box>
                  Favourite
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Image and Description */}
      <Box m="auto" w="80%" mt="15px">
        <SimpleGrid columns={[1, 1, 2]}>
          {/* Image  */}
          <Box w={["100%", "100%", "100%", "100%"]}>
            <Flex flexWrap="wrap" justifyContent="center" mt={7}>
              <Image
                h="100%"
                w="90%"
                src={data.image}
              />
            </Flex>
          </Box>

          {/* Description */}
          <Box w={["100%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            {/* Watch Title */}
            <Box w="90%" m="auto">
              <Box w="90%" mt={6}>
                <Text textAlign="left" fontSize="30px" fontWeight="bold">
                 {data.title}
                </Text>
              </Box>
              <br />

              <Box>
                <Text color="gray" textAlign="left">
                 Brand: {data.brand}
                </Text>
              </Box>
              <br />
              <Box bg="gray.50">
                <Text color="gray" p="20px 10px" textAlign="left">
                  Price : Rs.{data.price} 
                </Text>
              </Box>

              <Box mt="5">
                <Flex w={["100%"]}>
                  <Box w="fit-content">Color :</Box>
                  <Box
                    className="section-price-filter"
                    borderColor="gray.400"
                    // p="5px 20px"
                    ml={2}
                  >
                   Godl Black
                  </Box>
                  
                </Flex>
              </Box>
              
              <Box mt="2">
                <Flex w={["100%"]}>
                  <Box w="fit-content">Category:</Box>
                  <Box
                    className="section-price-filter"
                    borderColor="gray.400"
                    // p="5px 20px"
                    ml={2}
                  >
                   {data.category}
                  </Box>
                  
                </Flex>
              </Box>
              <p style={{marginTop:"15px"}}>(inclusive all taxes)</p>
                <p>* Delivery charges if appllicable will be applied at checkout</p>
                <p>* Country of origin-France</p>
                <p>* good product</p>

              <Box mt="15px">
                
                <Button bgColor="#2196f3" color="white" onClick={()=>handleAddtoCart(data._id,data.quantity)}>
                 Add to Cart
                </Button>
              </Box>

              <br />

             

              
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Description */}

      <br />
      <hr />

      <br />
      <Box>
        <Box w="90%" m="auto" bgColor="gray.50" borderBottom="2px solid orange">
          <Box w="fit-content" p={3} bgColor="yellow">
            <Text fontSize="xl" fontWeight="600">
              Description
            </Text>
          </Box>
        </Box>
        <br />

        <br />
        <Box textAlign="left" w="80%" m="auto">
          <Text fontSize="xl" fontWeight="600">
            Main Feature
          </Text>
          <hr />

          <br />

          <Box>
            <Text>{data.brand}</Text>
          </Box>

          <br />
          <br />
          <Box ml={5}>
            <ol>
              <li>Size:38.5*44.5*14mm</li>
              <li>Strap meterial:Silica gel</li>
              <li>Main screen:1.99-inch LCD 320*380</li>
              <li>BT 4.0 5.0 support bluetooth call</li>
              <li>Appearance material:Zinc alloy</li>
              <li>Charging mode:Wireless Charging</li>
              <li>Appearance material:Zinc alloy</li>
            </ol>
          </Box>

          <br />
          <br />

          <Box>
            <Text fontWeight={"bold"}>More Functions :</Text>
            <br />
            <Text>
              Custom components multi-lingual, Custom watch face, Breathing
              exercise, message reminder, call rejection. time alarm, mobile
              phone
            </Text>
            <br />
            <Text>
              Rotate Button,music control, remote control camera, stopwatch,
              countdown, waterproof，find mobile phone, weather forecast, etc.
            </Text>

            <br />
            <br />
            <Text fontWeight={"bold"}>How to use BT call :</Text>

            <br />
            <Text>
              The Bluetooth call function requires dual Bluetooth signal
              support, so you need to connect twice according to the
              instructions: ①Scan the QR code on the manual through the mobile
              phone browser, download the dedicated app, and turn on the mobile
              phone BT. Find and connect the ola esporte device in the app.
              Confirm binding ②Find the device in the Bluetooth of the mobile
              phone (check the device name in the watch to check the device
              information), and qevila select the connection and pairing
            </Text>

            <br />
            <br />
            <Text fontWeight={"bold"}>Support Bluetooth call：</Text>
            <br />
            <Text>
              Mobile phone synchronization of frequently used contacts.
            </Text>
            <br />
            <Text>So you can just use the watch to make call and answer.</Text>

            <br />

            <br />
            <Text fontWeight="700">Specifications</Text>
            <br />

            <TableContainer width="max-content">
              <Table size={["sm", "sm", "sm"]}>
                <Tbody>
                  <Tr>
                    <Td>Battery Capacity</Td>
                    <Td>180MAH</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Type</Td>
                    <Td>IPS</Td>
                  </Tr>
                  <Tr>
                    <Td>Charging Time</Td>
                    <Td>2 - 3 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Size</Td>
                    <Td>1.99</Td>
                  </Tr>
                  <Tr>
                    <Td>Operating mode</Td>
                    <Td>Touch Screen, Press button</Td>
                  </Tr>
                  <Tr>
                    <Td>Alert type</Td>
                    <Td>Vibration</Td>
                  </Tr>
                  <Tr>
                    <Td>Bluetooth calling</Td>
                    <Td>
                      Phone call reminder, Answering, Dialing, Reject answer the
                      phone
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Resolution</Td>
                    <Td>320*380</Td>
                  </Tr>
                  <Tr>
                    <Td>IP rating</Td>
                    <Td>IP67</Td>
                  </Tr>
                  <Tr>
                    <Td>Bluetooth distance </Td>
                    <Td>W/O obstacles 10m - 15m</Td>
                  </Tr>
                  <Tr>
                    <Td>Notification Type</Td>
                    <Td>Whatsapp, Wechat, Twitter, Facebook</Td>
                  </Tr>
                  <Tr>
                    <Td>Ram(memory)</Td>
                    <Td>32MB</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <br />
            <br />

            <Box>
              <Box>
                <Image
                src="https://img.freepik.com/premium-psd/mockup-realistic-elegant-smartwatches_85867-74.jpg?w=2000"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                src="https://img.freepik.com/free-vector/dark-style-realistic-smart-watch-horizontal-banner-with-advertising-site-vector-illustration_1284-30193.jpg?w=2000"
                  alt="specs"
                />
              </Box>
             
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <Box w="90%" m="auto">
        <Box>
          <Text textAlign="left " fontSize="2xl" fontWeight="bold">
            Customer Reviews
          </Text>
          <br />

          <hr />
          <br />
          <Box>
            <Flex justifyContent="space-between">
              <Box fontSize="4xl" color="gray.200" fontWeight="bold">
                <Text textAlign="left">0</Text>
                <Flex>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </Flex>
              </Box>
              <Box>
                <Center>
                  <Text
                    border="1px solid black"
                    cursor="pointer"
                    bgColor="yellow.400"
                    fontWeight="bold"
                    borderRadius="5px"
                    p={3}
                  >
                    Write a Review
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          <br />
          <br />
          <hr />
          <br />
          <br />
        </Box>
      </Box>
    <Footer/>
    </Box>
    </>
  );
};

export default SingleProductpage;