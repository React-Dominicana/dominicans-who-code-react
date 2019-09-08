import React from 'react'

import Navbar from 'reactstrap/lib/Navbar'
import NavbarBrand from 'reactstrap/lib/NavbarBrand'
import Nav from 'reactstrap/lib/Nav'
import NavItem from 'reactstrap/lib/NavItem'
import NavLink from 'reactstrap/lib/NavLink'
import { deflate } from 'zlib'

const Footer = () => (
    <Navbar color="light" expand="md" className="mt-4">
        <NavbarBrand href="/"><kbd>{process.env.REACT_APP_PROJECT_NAME}</kbd></NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="https://github.com/giancastle">Check the code</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)

export default Footer