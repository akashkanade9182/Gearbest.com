import { Box, Text ,SimpleGrid, Button, Input} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAdminProducts,deleteAdminProducts,updateAdminProducts } from '../Redux/AppReducer/action'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure,Heading,Select
  } from '@chakra-ui/react'

import Card from '../Components/Dashboard/Card'
import "../styles/Favirote.css"
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Id,setId]=useState("");
const[editdata,setEditData]=useState("")
const [parameter,setParameter]=useState("")
const navigate=useNavigate()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const dispatch=useDispatch()
const data=useSelector(store=>store.AppReducer.products)
const [page,setPage]=useState(1)

const handlePrev=()=>{
    if(page>1){
        setPage(prev=>prev-1)
    }
}


const handleNext=()=>[
    setPage(prev=>prev+1)
]

const handleDelete=(id,page)=>{
    dispatch(deleteAdminProducts(id,page))
       
    
   
}

const handleEdit=()=>{
    let payload={}
  if(parameter==="price"){

   payload.price=Number(editdata)
  }
  else if(parameter==="title"){
    payload.title=editdata
  }
  else if(parameter==="image"){
    payload.image=editdata
  }
  else if(parameter==="brand"){
    payload.brand=editdata
  }
  else if(parameter==="category"){
    payload.category=editdata
  }
 
    dispatch(updateAdminProducts(Id,payload,page)).then(()=>{
        
        onClose();
    })
    .catch((e)=>{
        console.log(e)
    })
}

useEffect(()=>{

dispatch(getAdminProducts(page));

 },[page])
  return (
    <>
    <Box w="100%" >
        <Box w="100%" h="80px" p="0 15px" display={"flex"} alignItems="center" justifyContent={"space-around"} bgColor={"#2196f9"}>
        <h1 className='logotext'>Geekbuying</h1>
            <Button >Total Products:-{50}</Button>
            <Button onClick={()=>navigate("/dashboard")}>Dashboard</Button>
            <Button onClick={()=>navigate("/addproducts")}>Add New Products</Button>
           
        </Box>
        <SimpleGrid mt="20px" columns="5" spacing="10">
            {
                data.length>0 && data.map((ele)=>(
                    <Card key={ele._id} {...ele} onOpen={onOpen}  setId={setId} handleDelete={handleDelete}/>
                ))
            }

        </SimpleGrid>
        <Box w="16%" m="auto" mt="20px" display={"flex"} justifyContent={"space-between"} >
            <Button onClick={handlePrev} bgColor="#2196f9" color="white">Prev</Button>
            <Button bg="transparent">{page}</Button>
            <Button onClick={handleNext} bgColor="#2196f9" color="white">Next</Button>
        </Box>

        

    </Box>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edite Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Heading textAlign={"center"}>Enter Data</Heading>
            <Input  mt="20px" value={Id} placeholder='Product Id'/>
            <Select mt="20px" placeholder='Select Parameter' onChange={(e)=>setParameter(e.target.value)}>
            <option value='title'>Title</option>
            <option value='image'>Image</option>
            <option value='price'>Price</option>
            <option value='brand'>Brand</option>
            <option value='category'>Category</option>
            </Select>
            <Input mt="20px" value={editdata} placeholder='Updated value' onChange={(e)=>setEditData(e.target.value)}/>
        

          
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleEdit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Dashboard