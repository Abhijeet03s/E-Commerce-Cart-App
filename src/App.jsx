import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'


function App() {

  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Hero />
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        <Card name="Nike Air" />
        <Card name="Jordan" />
        <Card name="Adidas" />
        <Card name="Puma" />
        <Card name="Puma" />
        <Card name="Puma" />
        <Card name="Puma" />
      </div>
      <Footer />
    </div>
  )
}

export default App
