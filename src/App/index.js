import { useState } from "react";
import Products from "../components/Products";
import { AppContainer, AppHeader, IconWrapper, Badge} from "./styles";
import { SiHomeadvisor } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import MainPage from "../components/MainPage";
import { Route ,Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import PaymentForm from "../components/checkOut";

function App() {
  const [visible, setVisible] = useState(false)
  const [menu_visible, menu_setVisible] = useState(false)
  const itemCount = useSelector(state => state.products.ProductCount);

  const handleVisible = () =>{
      setVisible(!visible);
  }

  const handleMenuVisible = () =>{
    menu_setVisible(!menu_visible);
}

  return (
    <AppContainer>
        <AppHeader>
          <IconWrapper>
            <FaBars size={40} color="white" onClick={handleMenuVisible}/>
          </IconWrapper>
          <SiHomeadvisor size={50} color="white"/>
          <IconWrapper>
            <FaShoppingCart size={40} color="white" onClick={handleVisible}/>
            {itemCount > 0 && <Badge>{itemCount}</Badge>}
          </IconWrapper>
        </AppHeader>
        <Routes>
          <Route path="/" element={<MainPage visible={visible} menu_visible={menu_visible}/>} />
          <Route path="/home" element={<MainPage visible={visible} menu_visible={menu_visible}/>} />
          <Route path="/cart" element={<Products visible={visible} menu_visible={menu_visible}/>} />
          <Route path="/checkout" element={<PaymentForm visible={visible} menu_visible={menu_visible}/>} />
        </Routes>
    </AppContainer>
    
  );
}

export default App;
