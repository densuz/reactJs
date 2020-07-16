import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Container,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContex';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand to ="/"className="nav-link">imReact</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/About"className="nav-link">About</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/mahasiswa"className="nav-link">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/kelas"className="nav-link">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Hooks"className="nav-link">Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/HooksEffects"className="nav-link">HooksEffects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Product"className="nav-link">Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/qity"className="nav-link">jumlah beli</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="primary">
                        <i className="fa fa-shopping-cart" ></i>
                        <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                    

                    <NavbarText>Login / Register </NavbarText>
                </Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default NavbarComp;