import Menu from "../Menu";
import ShoppingCart from "../Products/ShoppingCart";
import {PageContainer, ContainerPage, Header, MainContent, Footer, Title, Paragraph, Link, ImagePromotional, CenteredContainer} from "./style";

const MainPage = ({visible,menu_visible}) => {
    return (
        <ContainerPage>
            {
                menu_visible && <Menu />
            }
            <PageContainer>
                <Header>
                    <Title>Las mejores ofertas</Title>
                </Header>
                <MainContent>
                    <Title>
                        BLACK FRIDAY
                    </Title>
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                    <CenteredContainer>
                        <Paragraph>
                            Se acaba pronto, aprovecha
                        </Paragraph>
                        <ImagePromotional 
                            src='https://static.vecteezy.com/system/resources/previews/005/725/623/original/special-offer-sale-red-tag-isolated-illustration-discount-offer-price-label-symbol-for-advertising-campaign-in-retail-sale-promo-marketing-50-percent-off-discount-sticker-vector.jpg'
                            alt="Imagen Promocional"
                        />
                        <Paragraph>
                            Aproveche el 50 por ciento de descuento en productos seleccionados.
                        </Paragraph>
                    </CenteredContainer>
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