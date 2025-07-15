import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './App.css'
import OfferPage from './pages/OfferPage'
import DiningPage from './pages/DiningPage'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Rides from './pages/Rides'
import About from './pages/About'
// import SliderHeader from './components/component/Header/SliderHeader'
import ScrollToTop from './components/component/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/dining" element={<DiningPage />} />
      </Routes>
    </BrowserRouter>
  )
}
