import Products from "../Products";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

function App() {
  return (
    <AppContainer>
        <AppHeader>
            <HeaderTitle>Shop</HeaderTitle>
        </AppHeader>
        <Products/>
    </AppContainer>
  );
}

export default App;
