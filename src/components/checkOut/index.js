import React, { useState } from 'react';
import {Form,Input,Label,Button,ContainerPage,Title,PageContainer, Paragraph,FileContainer} from "./style";
import Menu from '../Menu';
import ShoppingCart from "../Products/ShoppingCart";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({menu_visible,visible}) => {
    const [visibleForm,setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleEnableTypePayment = () =>{
        setVisibleForm(!visibleForm);
    }

    const handleCompletePayment = () =>{
        navigate('/');
    }

    const Totalpayment = useSelector(state => state.products.Totalpayment);

    return (
        <ContainerPage>
            {
                menu_visible && <Menu />
            }
            <PageContainer>
                <Title>Total a pagar</Title>
                <Paragraph>{Totalpayment}</Paragraph>
                <Paragraph>Forma de pago:</Paragraph>
                <Button 
                    bgColor="#D3D3D3" 
                    textColor="#000" 
                    hoverBgColor="#A9A9A9"
                    onClick={handleEnableTypePayment}>
                        Llenar datos para el pago 
                </Button>
                {
                    visibleForm && (
                        <>
                            <Form onSubmit={handleSubmit}>
                                <FileContainer>
                                    <Label htmlFor="firstName">Nombre</Label>
                                    <Input required id="firstName" name="firstName" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="lastName">Apellido</Label>
                                    <Input required id="lastName" name="lastName" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="address1">Dirección</Label>
                                    <Input required id="address1" name="address1" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                                    <Input required id="cardName" name="cardName" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="cardNumber">Número de la tarjeta</Label>
                                    <Input required id="cardNumber" name="cardNumber" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="expDate">Fecha de expiración</Label>
                                    <Input required id="expDate" name="expDate" type="text" />
                                </FileContainer>

                                <FileContainer>
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input required id="cvv" name="cvv" type="text" />
                                </FileContainer>
                            </Form>
                        </>
                    )
                }
                <Paragraph>Detalles de productos comprados:</Paragraph>
                <Button 
                    bgColor="#D3D3D3" 
                    textColor="#000" 
                    hoverBgColor="#A9A9A9">
                        Detalle
                </Button>
                <Button onClick={handleCompletePayment}>Completar compra</Button>
            </PageContainer>
            
            {
                visible && <ShoppingCart />
            }
        </ContainerPage>
    );
};

export default PaymentForm;
