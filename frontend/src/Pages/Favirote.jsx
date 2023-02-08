import React,{useEffect,useState} from 'react'
import { Box ,Button,SimpleGrid} from '@chakra-ui/react'
import "../styles/Favirote.css"
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Card'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { EditCart } from '../Redux/AppReducer/action'
import { useSelector } from 'react-redux'
import Loader from '../Components/Productpage/Loader'





const getData=()=>{
    return axios.get("https://poised-slacks-bear.cyclic.app/geekbuying")
}


const Favirote = () => {
    const [data,setData]=useState([])
    const dispatch=useDispatch();
    const isLoading=useSelector(store=>store.AppReducer.isLoading)



    const handleFavorite = (id, favorite) => {
      let newfavorite = !favorite;
  
        dispatch(EditCart(id, {favorite : newfavorite }))
          .then(() => {
            getData().then((r)=>{
              setData(r.data.filter((ele)=>ele.favorite===true))
                 })
          })
  
        // setCount(prev=>prev+1)
  

  
  
  
  
    }


    useEffect(()=>{
   getData().then((r)=>{
setData(r.data.filter((ele)=>ele.favorite===true))
   })

    },[])
  return (
    <Box w="100%"  m="auto">
    <Navbar/>
    <SimpleGrid w="100%" mt="20px"columns={[2,2,3,5]} spacing="10">
        {
           data.length>0 && data.map((item)=>(
            isLoading?<Loader key={item._id} />:<Card key={item._id}  handleFavorite={()=>handleFavorite(item._id,item.favorite)} {...item}/>
           )) 
        }

    </SimpleGrid>

    </Box>
  )
}

export default Favirote