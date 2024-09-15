
import { Navbar,Container,Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = ()=>{
      navigate('/login')
  }
  const handleHome = () =>{
    navigate('/')
  }

  const handleConsul = () =>{
    navigate('/consultation')
  }
  return (

    <>
    <Navbar bg="#ebf2ff" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">AgroConnect</Navbar.Brand>
      <Nav className="m-auto">
        <Nav.Link onClick={handleHome}>Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link onClick={handleConsul} >Consultation</Nav.Link>
        <Nav.Link href="#pricing">Tree</Nav.Link>
        <Nav.Link href="#pricing">Disscuss</Nav.Link>
        
      </Nav>
      <button className = 'loginbtn'  onClick={handleLoginClick}>Log in</button>
      
    </Container>

  </Navbar>
  
  </>
  )
}

export default Header