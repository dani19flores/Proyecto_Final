import { useState } from "react";
import {MenuContainer, MenuItem} from "./style";

const Menu = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <MenuContainer>
            <MenuItem href="/home">Home</MenuItem>
            <MenuItem href="/cart">Products</MenuItem>
        </MenuContainer>
    )
}

export default Menu;