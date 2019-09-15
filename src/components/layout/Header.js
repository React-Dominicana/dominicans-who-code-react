import React from 'react'

import Navbar from 'reactstrap/lib/Navbar'
import NavbarBrand from 'reactstrap/lib/NavbarBrand'
import Nav from 'reactstrap/lib/Nav'
import NavItem from 'reactstrap/lib/NavItem'
import NavLink from 'reactstrap/lib/NavLink'

export const Header = () => {
    return (
        <Navbar color="light"  expand="md" className="mb-3">
            <NavbarBrand href="/"><kbd>{process.env.REACT_APP_PROJECT_NAME}</kbd></NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://github.com/AngelGarcia13/DominicanWhoCodes">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Dominate!</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

