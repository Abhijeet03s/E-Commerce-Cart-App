import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'

export default function App() {

  const [products, setProducts] = useState([])
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);


  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
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


  const handleAddToCart = (repeatProd) => {
    const prodExist = cartProducts.find((item) => item.id === repeatProd.id)
    if (prodExist) {
      setCartProducts(cartProducts.map((item) => item.id === repeatProd.id ? { ...prodExist, qty: prodExist.qty + 1 } : item))
    } else {
      setCartProducts([...cartProducts, { ...repeatProd, qty: 1 }])
    }
  }


  return (
    <div className='scroll-smooth font-mukta'>
      <Navbar handleCartClick={handleCartClick} count={cartProducts.length} />
      {/* <Hero /> */}
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        {!cartVisible && products.map((product, ind) => {
          return (
            <Card
              key={ind}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
              id={product.id}
              addToCart={handleAddToCart}
            />
          )
        })}
      </div>
      {cartVisible && <Cart
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />}
      {/* <Footer /> */}

    </div>
  )
}
