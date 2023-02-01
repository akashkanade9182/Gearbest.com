import React ,{useState,useEffect}from 'react'
import { getCart,EditCart } from '../Redux/AppReducer/action'
import {useDispatch,useSelector} from "react-redux"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import "../styles/Cartpage.css"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { getData } from '../Redux/AppReducer/action'

const TotalPrice=(cartItem,setTotalPrice,setTotalMrp,setDis)=>{
  let totalp=0;
  let totalm=0;
  cartItem.forEach((item)=>{
    totalp=totalp+(item.price*item.quantity);
    

  })
  setTotalMrp(totalp);
  setDis(Math.floor(totalp*0.19))
  setTotalPrice(Math.floor(totalp-totalp*0.19))

}


const Cartpage = () => {
  const dispatch=useDispatch();
  const products=useSelector(store=>store.AppReducer.products);
  const[totalMrp,setTotalMrp]=useState("");
  const [count,setCount]=useState(0);
  const [dis,setDis]=useState(0)
  const[totalprice,setTotalPrice]=useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const cartItem=products.filter((item)=>item.quantity>0)


  const handleAddProduct=(id,quantity,price,MRP)=>{
    const newquantity=quantity+1;
    dispatch(EditCart(id,{quantity:newquantity})).then(()=>{
        TotalPrice(cartItem,setTotalPrice,setTotalMrp,setDis)
    })

 
   setCount(prev=>prev+1)
}


const handleRemoveProduct=(id,quantity,price,MRP)=>{
    const newquantity=quantity-1;
    if(newquantity>=0){
        dispatch(EditCart(id,{quantity:newquantity})).then(()=>{
            TotalPrice(cartItem,setTotalPrice,setTotalMrp,setDis)
        })
     
   
      
      
       
    }
   
  
    setCount(prev=>prev+1)
  
}
  useEffect(()=>{
dispatch(getData()).then(()=>{
    TotalPrice(cartItem,setTotalPrice,setTotalMrp,setDis)
})


  },[dispatch,totalMrp,setTotalMrp,cartItem.length,location.search,setCount,count])

const handleNavigate=()=>{
  navigate("/checkout")
}
const handleScroll=()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


  return (
    <div className='cart'>
      <Navbar/>
      <div className='cartbox'>
        <h1>Order Summery</h1>
        <div>
         <div className='cartproductsbox'>
          <h4>PRODUCTS</h4>
         {
          cartItem.map((item,index)=>(
            <div className='productcard' key={index}>
                <div>
                  <h1>{item.title}</h1>
                  <p>Mfr: TNW International Ltd</p>
                  <h2><span>Rs.{item.price}</span><span>{item.MRP}</span></h2>
                  <h4>Delivery between NOVEMBER 17-NOVEMBER 18</h4>
        
                </div>
                <div>
                  <img src={item.image} alt="err" />
                  <div className='countingbox'>
                  <button onClick={()=>handleAddProduct(item._id,item.quantity)}>+</button>
                   <div>{item.quantity}</div>
                 <button onClick={()=>handleRemoveProduct(item._id,item.quantity)}>-</button>
                  </div>
                </div>

              </div>
          ))
         }
         </div>
         <div className='pricesbox'>
              <h4>PRICE DETAILS</h4>
              <div className='promocodebox'>
                <h1>Apply Propmo code</h1>
                <div>
                  <button></button>
                  <div>Apply code</div>
                </div>
                <p><span>Get flat discount! Vouchers applicable in payment options.</span></p>


              </div>
              <div className='totalpricebox'>
                <h1>PAYMENT DETAILS</h1>
                <div className='calculatebox'>
                  <div><span>Mrp total:-</span><span>{totalMrp}</span></div>
                  <div><span>Discount:-</span><span>-{dis}</span></div>
                  <div><span>Total Amount:-</span><span>{totalprice}</span></div>
                </div>
                <div className='totalsave'>
                TOTAL SAVINGS RS.{dis}
                </div>
                <div className='finalprice'>
                  <div>
                    <p>TOTAL AMOUNT</p>
                    <h1>Rs.{totalprice}</h1>

                  </div>
                  <button onClick={handleNavigate}>PROCEED</button>
          

                </div>

              </div>
              


         </div>

        </div>

      </div>
      {/* <button style={{
        border: "none",
        width: "150px",
        display:"flex",
        alignItems:"center",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9px",
        margin: "auto",
        padding: "5px 10px",
        marginTop: "20px"
      }}
      onClick={handleScroll}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        </svg>Scroll to Top</button> */}
      <Footer/>
    
      
    </div>
  )
}

export default Cartpage