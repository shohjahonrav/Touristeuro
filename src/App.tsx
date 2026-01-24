import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header/Header"
import Home from "./pages/home/Home"
import AboutUs from "./pages/aboutus/AboutUs"
import Footer from "./layout/Footer/Footer"
import Countries from "./pages/countries/Countries"
import Tours from "./pages/tours/Tours"
import Contact from "./pages/contact/Contact"
import TourInfo from "./components/TourInfo"

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour/:id" element={<TourInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App