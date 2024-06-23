import styled from "styled-components";

const AppContainer = styled.main`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 25px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-sizing: border-box;
    background-color: #000;
`;

const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: #000;
    border: 1px solid #e5e7eb;
    padding: 10px 20px;
    height: 60px;
`;

const HeaderTitle =  styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    color: #fff;
`;

const ShoppingCart_btn = styled.button`
    background-color: transparent;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #e5e7eb;
`;

const IconWrapper = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;

const Badge = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { AppContainer, AppHeader, HeaderTitle, ShoppingCart_btn,  IconWrapper, Badge}