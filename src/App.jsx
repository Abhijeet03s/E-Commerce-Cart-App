import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'


export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(false)

  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchData();
  }, [])


  const allProducts = products.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
      />
    )
  })

  return (
    <div className='scroll-smooth'>
      <Navbar />
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        {allProducts}
      </div>
      {/* <Hero /> */}
      {/* <Footer /> */}
    </div>
  )
}
