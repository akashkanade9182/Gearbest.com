import React from 'react'
import {Routes,Route} from "react-router-dom"


import Homepage from './Homepage'
import Productpage from './Productpage'
import SingleProductpage from './SingalProductpage'
import Cartpage from './Cartpage'
import Checkoutpage from './Checkoutpage'


const AllRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/productpage" element={<Productpage/>} />
          <Route path="/:id" element={<SingleProductpage/>} />
          <Route path="/cart" element={<Cartpage/>} />
          <Route path="/checkout" element={<Checkoutpage/>} />
    </Routes>
  )
}



export default AllRoutes;