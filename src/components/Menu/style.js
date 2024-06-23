import styled from "styled-components";

const MenuContainer = styled.div`
    margin: 10px;
    padding: 10px;
    width: 400px;
    border: 1px solid #e5e7eb;
    box-sizing: border-box;
    align-items: center;
`;

const MenuItem = styled.a`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-color: #575757;
    }
`;

export {MenuContainer, MenuItem}
