import { Container,Row,Col,InputGroup,Form} from "react-bootstrap"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const handleRegClick = () =>{
    navigate('/registration')
  }

  return (
    <Container>
        <Header/>
        <section className="loginsection">
        <Row>
        <Col>
            <div className="leftlogin">
                <h3>Benefits at AgroConnect</h3>
                <p>You will have the best solution from us</p>

                <div className="maindivlogin">
                  <div className="icon">
                  <img src="./src/assets/24.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>24/7 Unlimited Video Consultions</p>
                  </div>
                  <div className="icon">
                  <img src="./src/assets/25.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Appointment for later</p>
                  </div>
                </div>

                <div className="maindivlogin">
                  <div className="icon">
                  <img src="./src/assets/26.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Delevery at your DoorStep ASAP</p>
                  </div>
                  <div className="icon">
                  <img src="./src/assets/27.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Follow up Reminder</p>
                  </div>
                </div>

                <div className="maindivlogin">
                  <div className="icon">
                  <img src="./src/assets/28.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>24/7 Unlimited Video Consultions</p>
                  </div>

                  <div className="icon">
                  <img src="./src/assets/29.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Medicine Reminder</p>
                  </div>
                </div>

                <div className="maindivlogin">
                  <div className="icon">
                  <img src="./src/assets/30.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Fancy Payments Option To Paid</p>
                  </div>

                  <div className="icon">
                  <img src="./src/assets/31.svg" alt="" />
                  </div>
                  <div className="peradiv">
                    <p>Instant Response</p>
                  </div>
                </div>

            </div>
        </Col>
        
        <Col>
        <div className="rightlogin">
          <div className="rightlogincontent">

            <h2 style={{fontWeight:'700'}}>easy to start !</h2>
            <p style={{fontSize:'15px'}}>enter your register phone number and <br></br>password to access better information</p>

            <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email or Phone number"
              aria-label="Recipient's username"
            />
             </InputGroup>

            <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Recipient's username"
              type="password"
            />
             </InputGroup>
            
            <p style={{marginTop:'10px',fontSize:'15px'}}>agree and accept the <span style={{color:'#198754',fontWeight:'600'}}>Temrs of Service</span> and <br></br> <span style={{color:'#198754',fontWeight:'600'}}>Privacy Policy</span> in use of the <span style={{fontWeight:'600'}}>AgroConnect</span></p>

            <button  className="loginbtn">Login</button>

            <p style={{marginTop:'10px'}}>or <button className="regbtn" onClick={handleRegClick}>registration</button></p>
            </div>
            </div>
        </Col>
      </Row>

      </section>
    </Container>
  )
}

export default Login