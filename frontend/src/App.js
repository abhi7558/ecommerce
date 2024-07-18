import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import AboutUs from "./Components/Footer/AboutUs";
import Contact from './Components/Footer/Contact';
import ThankYou from './Components/Footer/ThankYou';
import PaymentPage from "./Components/CartItems/PaymentPage";
import SuccessPage from "./Components/CartItems/SuccessPage";
import AboutCompany from "./Components/Footer/AboutCompany";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Thankyou' element={<ThankYou/>}/>
          <Route path='/paymentpage' element={<PaymentPage/>}/>
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/aboutcompany" element={<AboutCompany />} />
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
