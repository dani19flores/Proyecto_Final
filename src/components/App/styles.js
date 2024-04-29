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
    
    box-sizing: border-box;
    background-color: #000;
    border: 1px solid #e5e7eb;
`;

const HeaderTitle =  styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    color: #fff;
`;

export { AppContainer, AppHeader, HeaderTitle }