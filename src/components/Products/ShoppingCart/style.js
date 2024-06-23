import styled from "styled-components";

const ListProductContainer = styled.section`
    margin: 10px;
    padding: 10px;
    width: 400px;
    border: 1px solid #e5e7eb;
    box-sizing: border-box;
    align-items: center;
`;

const CheckoutButton = styled.button`
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
`;

const TotalPrice = styled.div`
    color: #fff;
    margin: 1rem 0;
    font-size: 1.5rem;
    text-align: right;
`;

export { ListProductContainer, CheckoutButton, TotalPrice}