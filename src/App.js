import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';
import ContextProducts from './context/ContextProducts';
import ProductInfo from './pages/ProductInfo';
import Shop from './pages/Shop';
import CartContext from './context/CartContext';
import CartPage from './pages/CartPage';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import UserData from './context/UserContext';
import CheckOut from './pages/CheckOut';
import FavoriteProducts from './pages/Favorite';
function App() {
  return (
    <UserData>
      <ContextProducts>
        <CartContext>
          <Routes>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product-info" element={<ProductInfo />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart-page" element={<CartPage />} />
            <Route path="favorite" element={<FavoriteProducts />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </CartContext>
      </ContextProducts>
    </UserData>
  );
}

export default App;
