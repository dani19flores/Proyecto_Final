import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%; 
    max-width: 100%;
    background-color: black;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
`;

const ContainerPage = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = styled.header`
    background-color: #333;
    color: white;
    padding: 10px 20px;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 20px;
`;

const Footer = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: white;
`;

const Link = styled.a`
    
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export {PageContainer, ContainerPage,Header, MainContent, Footer, Title, Paragraph, Link}