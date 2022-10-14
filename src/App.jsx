import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'

export default function App() {

  const [products, setProducts] = useState([])
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleCartClick = () => {
    console.log("Abhijeet");
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (id) => {
    const addedItem = products.filter((product) => product.id === id);
    setCartProducts([...cartProducts, ...addedItem]);
  }


  const allProducts = products.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        addToCart={handleAddToCart}
      />
    )
  })

  return (
    <div className='scroll-smooth'>
      <Navbar handleCartClick={handleCartClick} />
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        {allProducts}
      </div>
      {cartVisible && <Cart />}
      {/* <Hero /> */}
      {/* <Footer /> */}
    </div>
  )
}
