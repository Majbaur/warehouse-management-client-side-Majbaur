// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import logo from '../../../images/carLogo.jpg'
// import './Header.css'

// const Header = () => {
//     const [user] = useAuthState(auth);

//     const handleSignOut = () =>{
//         signOut(auth);
//     }

//     return (
//         <>
//             <Navbar style={{backgroundColor:'#DCEAF7'}} collapseOnSelect expand="lg" sticky='top' variant="dark">
//                 <Container>
//                     <Navbar.Brand as={Link} to="/">
//                         <img height={50} src={logo} alt="" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto ">
//                             <Nav.Link style={{color:'black'}} as={Link} to="/">Home</Nav.Link>
//                             <Nav.Link style={{color:'black'}} href="home#Products">Products</Nav.Link>
//                             <Nav.Link style={{color:'black'}} as={Link} to="blog">Blog</Nav.Link>
//                         </Nav>
//                         <Nav>
                           
//                             {
//                                 user ?
//                                     <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
//                                 :
//                                 <Nav.Link style={{color:'black',}} as={Link} to="login">
//                                 Login
//                             </Nav.Link>}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;
















// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import logo from '../../../images/logo.png'


import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/carLogo.jpg'
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#Products">Products</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="addItems">Added Items</Nav.Link>
                                <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;