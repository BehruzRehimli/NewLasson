import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import style from "./styles/Navbar.module.css"

const NavBar = (props) => {
    // const data=props ? props.data:undefined
    const data = props.data ?? undefined
    const { name } = data ?? {}


    const [links, setLinks] = useState([])

    useEffect(() => {
        setLinks(['Home', 'About'])
    }, [])


    return (
        <div>
            <button onClick={() => {
                setLinks(['Home', 'About'])
            }}>Add Links</button>
            <ul>
                {
                    links.map((x, i) => (
                        <li key={i}>
                            <Link className={style.navLinks} to={"/"}>{x}</Link>

                        </li>
                    ))
                }
                <li >
                    <Link className={style.navLinks} to={"/about"}>About</Link>

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