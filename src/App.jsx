import Footer from "./components/Footer/Footer"
import Nav from './components/Navbar/Navbar'

import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
