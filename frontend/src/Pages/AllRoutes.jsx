import React from 'react'
import {Routes,Route} from "react-router-dom"


import Homepage from './Homepage'
import Productpage from './Productpage'
import SingleProductpage from './SingalProductpage'
import Cartpage from './Cartpage'
import Checkoutpage from './Checkoutpage'
import Signup from './Signup'
import Login from './Login'
import Adminlogin from './Adminlogin'
import Favirote from './Favirote'
import Dashboard from './Dashboard'
import AddProducts from './AddProducts'
import EditeProducts from './EditeProducts'
import PrivateRoute from './PrivateRoute'



const AllRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/productpage" element={<PrivateRoute><Productpage/></PrivateRoute>} />
          <Route path="/:id" element={<PrivateRoute><SingleProductpage/></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><Checkoutpage/></PrivateRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/favirote" element={<PrivateRoute><Favirote/></PrivateRoute>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/editproducts" element={<EditeProducts/>} />
          <Route path="/addproducts" element={<AddProducts/>} />
          
    </Routes>
  )
}



export default AllRoutes;