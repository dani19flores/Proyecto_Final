import Menu from "../Menu";
import ShoppingCart from "../Products/ShoppingCart";
import {PageContainer, ContainerPage, Header, MainContent, Footer, Title, Paragraph, Link} from "./style";

const MainPage = ({visible,menu_visible}) => {
    return (
        <ContainerPage>
            {
                menu_visible && <Menu />
            }
            <PageContainer>
                <Header>
                    <Title>¡Bienvenido a la pagian de productos!</Title>
                </Header>
                <MainContent>
                    <Paragraph>
                        En esta papgina puedes encontrar variedad de todos los productos, tiene un carrito donde puedas agregarlos y al finalizar comprar donde encriptara tus datos para su mayor seguridad
                    </Paragraph>
                    <Paragraph>
                        Visita nuestro <Link href="/cart">catálogo de productos</Link>.
                    </Paragraph>
                </MainContent>
                <Footer>
                    <p>&copy; {new Date().getFullYear()} Empresa de productos de sva. Todos los derechos reservados.</p>
                </Footer>
            </PageContainer>
            {
                visible && <ShoppingCart />
            }
        </ContainerPage>
        
    );
};

export default MainPage;