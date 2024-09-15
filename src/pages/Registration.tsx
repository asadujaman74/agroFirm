
import Header from "../components/Header"
import { Container,Row,Col,InputGroup,Form} from "react-bootstrap"

const Registration = () => {


  return (
    <Container>
    <Header/>
    <section className="regsection">
    <Row>
    <Col className="regleft">
    <div style={{marginLeft:'100px'}}>
    <h2 style={{fontWeight:'700'}}> Registraion for <br />explore more !</h2>
    {/* <p style={{fontSize:'15px'}}>enter your register phone number and <br></br>password to access better information</p> */}


    {/* <div className="coolinput">
      <label  className="text">Name:</label>
      <input type="text" placeholder="Write here..." name="input" className="input"/>
    </div>

    <div className="coolinput">
      <label  className="text">Password:</label>
      <input type="text" placeholder="Write password here..." name="input" className="input"/>
    </div> */}

    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your name..."
          aria-label="Recipient's username"
        />
         </InputGroup>



         <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your email"
          aria-label="Recipient's username"
        />
         </InputGroup>


         <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="write password here"
          aria-label="Recipient's username"
        />
         </InputGroup>

         <Form.Select aria-label="Default select example">
            <option>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
         </Form.Select>

         <button style={{marginTop:'15px'} } className="loginbtn">Register</button>

         </div> 
       
    </Col>
    

    
    <Col>
    <div className="rightreg">
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, corporis. Nisi nulla alias hic deserunt deleniti enim ab reiciendis cupiditate explicabo consequatur quae dolorum consequuntur repellat aliquid quo facilis fuga laudantium, nemo, eius non? Repellat hic, accusantium ea, error vel impedit voluptatem ex similique dicta totam accusamus!</h5>
        </div>
    </Col>
  </Row>

  </section>



</Container>
  )
}

export default Registration