import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import HeroSec from './Components/HeroSec/HeroSec'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import GetSec from './Components/GetSec/GetSec'
import PriceSec from './Components/PriceSec/PriceSec'


const fetchData = async () => {
  const res = fetch("/data.json");
  return (await res).json();
}
const dataPromise = fetchData();


function App() {
  const [cartCount, setCartCount] = useState([]);

  return (
    <>
      <NavBar cartCount={cartCount}/>

      <HeroSec />

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Main
          dataPromise={dataPromise}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </Suspense>

      <GetSec />

      <PriceSec />


      <Footer />
    </>
  )
}

export default App