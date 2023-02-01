import React,{useEffect,useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getData ,EditCart} from '../Redux/AppReducer/action'
import { SimpleGrid,Box } from '@chakra-ui/react'



import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Sidebar from '../Components/Productpage/Sidebar'
import Loader from '../Components/Productpage/Loader'
import "../styles/Productpage.css"






const Productpage = () => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.AppReducer.products);
    const location = useLocation();
    const [range, setRange] = useState(100000)
    const navigate = useNavigate()
    const [minvalue, setminvalue] = useState(1000);
    const [maxvalue, setmaxvalue] = useState(4000);
    const [searchParams] = useSearchParams();
    const [sort, setSort] = useState(searchParams.get("sortBy") || "")
    const [Brand, setBrand] = useState(searchParams.getAll("brand"));
    const [count, setCount] = useState(0)
    const isLoading = useSelector(store => store.AppReducer.isLoading)
    const catarray = ['Noice', 'firebolt', 'boat', 'Apple', 'hammer', 'Agrawal', 'Aroma', 'Ayur', 'Alyuva', 'Atulya']
    const countarray = [3, 5, 3, 1, 1, 1, 1, 1, 1, 1]


    const hadleAddtoCart = (id) => {
        dispatch(EditCart(id, { quantity: 1 }))
          .then(() => {
            let queryparams
            if (location.search || products.length === 0) {
              let brand = searchParams.getAll("brand");
              queryparams = {
                params: {
                    categort:"smartwatch",
                  brand: brand,
                  _sort: sort && "price",
                  _order: searchParams.get("sortBy")
    
                }
              }
    
            }
    
            dispatch(getData(queryparams, range));
          })
    
        setCount(prev => prev + 1)
      }
    
      const handleAddProduct = (id, quantity) => {
        let newquantity = quantity + 1;
        dispatch(EditCart(id, { quantity: newquantity }))
          .then(() => {
            let queryparams
            if (location.search || products.length === 0) {
              let brand = searchParams.getAll("brand");
              queryparams = {
                params: {
                    catgegory:"smartwatch",
                  brand: brand,
                  _sort: sort && "price",
                  _order: searchParams.get("sortBy")
    
                }
              }
    
            }
    
            dispatch(getData(queryparams));
          })
        // console.log(quantity, id)
    
        // setCount(prev=>prev+1)
      }
    
    
    
      const handleRemoveProduct = (id, quantity) => {
        let newquantity = quantity - 1;
        if (newquantity >= 0) {
          dispatch(EditCart(id, { quantity: newquantity }))
            .then(() => {
              let queryparams
              if (location.search || products.length === 0) {
                let brand = searchParams.getAll("brand");
                queryparams = {
                  params: {
                    catgegory:"smartwatch",
                    brand: brand,
                    _sort: sort && "price",
                    _order: searchParams.get("sortBy")
    
                  }
                }
    
              }
    
              dispatch(getData(queryparams));
            })
    
          // setCount(prev=>prev+1)
    
        }
    
    
        setCount(prev => prev + 1)
    
      }

      const handleFavorite = (id, favorite) => {
        let newfavorite = !favorite;
    
          dispatch(EditCart(id, {favorite : newfavorite }))
            .then(() => {
              let queryparams
              if (location.search || products.length === 0) {
                let brand = searchParams.getAll("brand");
                queryparams = {
                  params: {
                    catgegory:"smartwatch",
                    brand: brand,
                    _sort: sort && "price",
                    _order: searchParams.get("sortBy")
    
                  }
                }
    
              }
    
              dispatch(getData(queryparams));
            })
    
          // setCount(prev=>prev+1)
    

    
    
        setCount(prev => prev + 1)
    
      }
    








    const handleSortclick = (val) => {

        setSort(val)
      }
      const handleNavigate = (id) => {
        navigate(`/${id}`)
        // console.log(id)
      }
      const handleScroll=()=>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }

    useEffect(()=>{
        let queryparams
      
          let brand = searchParams.getAll("brand");
          queryparams = {
            params: {
              brand: brand,
              _sort: "price",
              _order: searchParams.get("sortBy"),
              price_lte:range
    
            }
        
    
        }
    
        dispatch(getData(queryparams))
    },[searchParams,dispatch,range])
  return (
    <>
    <Navbar />
    <Box display="flex" marginBottom="20px" justifyContent={"space-between"} w="98%" m="auto" mt="15px" className='categorypage'>

      
      

  
        <Sidebar props={{ setBrand, setRange, minvalue, maxvalue, catarray, countarray, setSort }} />
        <Box w={["90%","100%","79%","79%"]} m="auto" className='productsbox'>

          <div className='categoryimagebox'>
            <img src="https://img.gkbcdn.com/bn/2212/5-63ac10cc2b40c966cc189a8e._p1_.jpg" alt="" />
          </div>
          <div className='sortingbox'>
            <div>
              <label >Brands:-</label>

              {
                Brand && Brand.map((item, index) => (
                  <button style={{backgroundColor:"#2196f3",color:"white"}} key={index}>{item}</button>
                ))
              }

            </div>
            <div>
              <label htmlFor="">sort by:-</label>
              <button className={sort == "asc" ? "buttontrue" : "buttonfalse"} onClick={() => handleSortclick("asc")}>Price Low to High</button>
              <button className={sort == "desc" ? "buttontrue" : "buttonfalse"} onClick={() => handleSortclick("desc")}>Price High to low</button>
            </div>
         

          </div>
          <SimpleGrid w="100%" columns={[1,2,3,4]} spacing={5} >
            {
              products.length > 0 && products.map((item, index) => (
               isLoading?<Loader key={item._id} />: <Card key={item._id} handleNavigate={() => handleNavigate(item._id)} hadleAddtoCart={() => hadleAddtoCart(item._id)} handleAddProduct={() => handleAddProduct(item._id, item.quantity)} handleFavorite={()=>handleFavorite(item._id,item.favorite)} handleRemoveProduct={() => handleRemoveProduct(item._id, item.quantity)} {...item} />
              ))
            }

          </SimpleGrid >
         
        </Box>

  

   
    </Box>
    <Footer/>
    </>
  )
}

export default Productpage