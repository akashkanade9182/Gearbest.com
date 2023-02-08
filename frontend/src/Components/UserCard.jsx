import React from 'react'
import { Box ,Button} from '@chakra-ui/react'
import axios from 'axios'


// cosnt postData=(payload)=>{
//     return axios.post()
// }

const Usercard = ({_id,company,location,contract,position,sendApply,status}) => {
    const handleClick=(id)=>{
        sendApply(id)
    }
  return (
    <Box display={"flex"} flexDirection="column" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10px 10px">
        <p style={{color:"grey"}}>{contract}</p>
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>{position}</h1>
        <p style={{color:"grey"}}>{company}</p>
        <p style={{color:"skyblue"}}>{location}</p>
        {
            status===false && <Button onClick={()=>handleClick(_id)}>Apply</Button>
        }
        


    </Box>
  )
}

export default Usercard;