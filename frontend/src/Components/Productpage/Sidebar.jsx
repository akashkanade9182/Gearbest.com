import React, { useEffect, useState } from 'react'
import "../../styles/Sidebar.css"
import { Box, Select } from '@chakra-ui/react'
import{useSearchParams,useLocation} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


// const catarray=['Active_beaute', 'Arata', 'Aryanveda', 'Avene', 'Beardo', 'Agrawal', 'Aroma', 'Ayur', 'Alyuva', 'Atulya', 'AZAFRAN', 'Be Bodywise', 'Bold Care', "Chaitanya'", 'Kapiva ', 'Aiwo ', 'B-Protin', 'Boost', 'Bournvita', 'andMe ', 'Apple Cider Vinegar', 'ElectroFizz', 'Dr. Morphan', 'Enerzal', 'Glucon-D', 'Kapiva', 'Resmed', 'Akas', 'Dr. Odin', 'AccuSure', 'Airways', 'Bard', 'La-Med']
// const countarray=[4, 5, 3, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 2, 1, 8]


const Check=(products,setArr,setsubCat)=>{
   
  let obj={};
  products.forEach((ele)=>{
  
  if(obj[ele.brand]===undefined)
  {
      obj[ele.brand]=1;
  }else{
      obj[ele.brand]++;
  }
 })
 let brr=[];
 let crr=[];
 for(let key in obj){
  brr.push(key);
  crr.push(obj[key])

 }
 setsubCat([...brr]);
 setArr([...crr]);


}


const Sidebar = ({props}) => {
  const{setBrand,setSort,setRange,catarray,countarray,minvalue,maxvalue}=props;
  const location=useLocation();
  const[subcat,setsubCat]=useState([])
  const[arr,setArr]=useState([])
  const[count,setCount]=useState(0);
  const [searchParams,setseachParams]=useSearchParams();
  const products=useSelector(store=>store.products)
  const[result,setResult]=useState(searchParams.getAll("brand")||[])
  const[sortBy,setSortBy]=useState(searchParams.get("sortBy")||"");

 






  const handleChange=(e)=>{
    let option=e.target.value;
    let newCategory=[...result];
    
    if(newCategory.includes(option))
    {
        newCategory.splice(newCategory.indexOf(option),1);
    }else{
        newCategory.push(option);
    }
    setResult(newCategory);
    setBrand(newCategory);
    console.log(result);
  }

const handleSortclick=(val)=>{
  setSortBy(val);
  setSort(val)
}



  useEffect(()=>{
    

    const params={};
    result && (params.brand=result);
    sortBy&&(params.sortBy=sortBy);
    // sortBy&&(params.sortBy=sortBy);
    setseachParams(params);
    // Check(products,setArr,setsubCat);
  },[result,setseachParams,sortBy])
  // console.log("check",arr);

 

  
  return (
    <Box w={["50%","30%","20%","20%"]} h="fit-content" className='sidebar' display={["none", "none","flex","flex"]} flexDirection="column" justifyContent={"flex-start"}>
     
   
        <div className='brandbox'>
          <h1>All Brands</h1>
          {
           catarray.map((item,index)=>(
              <div key={index} className='brandinputbox'>
                <input type="checkbox"
                value={item}
                onChange={handleChange}  defaultChecked={result.includes(item)}
                 
                  
                  />
                <label >{item}({countarray[index]})</label>
                </div>
            ))
            
          }
          

        </div>
        <div className='featuresbox'>
          <h1>Filters</h1>
          <div >
            <button onClick={()=>handleSortclick("asc")}>Price Low to High</button>
            <button onClick={()=>handleSortclick("desc")}>Price High to low</button>
            <div>
              <label> low</label>
            <input type="range" min={minvalue} onChange={(e)=>setRange(e.target.value)} max={maxvalue}  step="10" />
            <label> High</label>
            </div>

          </div>

        </div>
        <div style={{width:"100%",margin:"auto",marginTop:"20px"}}>
              <img  style={{width:"100%",height:"100%"}} src="https://cdn.dribbble.com/users/4189543/screenshots/12765561/1600_1200_4x.png" alt="" />
        </div>
       <div style={{width:"100%",margin:"auto",marginTop:"20px"}}>
              <img  style={{width:"100%",height:"100%"}} src="https://img.freepik.com/free-vector/two-horizontal-realistic-smart-watch-banner-set-with-special-high-smart-watch-descriptions-vector-illustration_1284-30195.jpg?w=2000" alt="" />
        </div>       ``

    </Box>
  )
}

export default Sidebar