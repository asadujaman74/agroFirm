import { Container, Row, Col,Image} from "react-bootstrap"

const Gethelp = () => {
  return (
    <Container>
        <div className="gethelp" >
            <h5>Get Agro Help</h5>
            <h1>Just in few taps!</h1>
        </div>

        <div className="fewtaps">
        <Row>
        <Col sm={3}>
            <div className="gethelp2">
            <Image src="./src/assets/it.svg"  className='' fluid />
            
                <h5>Easy To Use</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia alias corporis nulla tempora vero, qui ut quas unde dolor quibusdam aperiam provident dolorem ex, nisi, officia temporibus error optio.</p>
                </div>
        </Col>

        <Col sm={3}>
        <div className="gethelp2">
            <Image src="./src/assets/online.svg"  className='' fluid />
            
                <h5>Anytime</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia alias corporis nulla tempora vero, qui ut quas unde dolor quibusdam aperiam provident dolorem ex, nisi, officia temporibus error optio.</p>
                </div>
        </Col>
        <Col sm={3}>
            <div className="gethelp2">
                <Image src="./src/assets/msg.svg"  className='' fluid />
            
                <h5>Trusted</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia alias corporis nulla tempora vero, qui ut quas unde dolor quibusdam aperiam provident dolorem ex, nisi, officia temporibus error optio.</p>
                </div>
        
        </Col>
        <Col sm={3}>
        <Image src="./src/assets/easy-removebg.png"  className='circle' thumbnail   />
        </Col>
      </Row>
      </div>
    </Container>
  )
}

export default Gethelp