import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Label = styled.label`
    color: white;
    font-size: 14px;
    margin-bottom: 5px;
`;

const Button = styled.button`
    background-color: ${props => props.bgColor || '#6200ea'};
    color: ${props => props.textColor || 'white'};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 15px;

    &:hover {
        background-color: ${props => props.hoverBgColor || '#3700b3'};
    }
`;

const ContainerPage = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    color: white;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%; 
    max-width: 100%;
    background-color: black;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: white;
`;

export {Form,Input,Label,Button,ContainerPage,Title,PageContainer,Paragraph}