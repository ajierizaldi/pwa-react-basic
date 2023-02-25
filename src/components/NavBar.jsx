import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar className='text-white bg-secondary'>
            <Container>
                <Navbar.Brand href="#home"><img src="icon.png" alt="icon" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href='/' className='p-3'>Home</Nav.Link>
                    <Nav.Link href='/' className='p-3'>About</Nav.Link>
                    <Nav.Link href='/' className='p-3'>Blog</Nav.Link>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
}

export default NavBar;