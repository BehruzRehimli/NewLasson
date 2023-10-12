import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>

                </li>
                <li>
                    <Link to={"/about"}>About</Link>

                </li>
                <li>
                    <Link to={"/shop"}>Shop</Link>

                </li>
                <li>
                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                        <Dropdown.ItemText>Detail</Dropdown.ItemText>
                        <Dropdown.Item as="button">WebSide</Dropdown.Item>
                        <Dropdown.Item as="button">Office</Dropdown.Item>
                        <Dropdown.Item as="button">Adress</Dropdown.Item>
                    </DropdownButton>

                </li>
            </ul>
        </div>
    )
}

export default NavBar