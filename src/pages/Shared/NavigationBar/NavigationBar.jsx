import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                  
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link style={{textDecoration: 'none'}} className='ms-2 text-black' to='/'>Home</Link>
                            <Link style={{textDecoration: 'none'}} className='ms-2 text-black' to=''>About</Link>
                            <Link style={{textDecoration: 'none'}} className='ms-2 text-black' to=''>Career</Link>
                            {/* <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link> */}
                           
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}
                           
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </Container>
    );
};

export default NavigationBar;