import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/About">About</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kelas">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Hooks">Hooks</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Login / Register </NavbarText>
                </Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default NavbarComp;