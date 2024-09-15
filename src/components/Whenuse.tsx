import { Container,Row,Col,Image } from "react-bootstrap"

const Whenuse = () => {
  return (
    <Container>
        <div className="mainuse">
            <Row>
                <Col className="hvr" style={{marginRight:'25px'}}>
                 <Image src="./src/assets/when2-removebg.png"  className='' style={{marginTop:'100px'}} />
                </Col>
             
                <Col>
                    <h1 style={{fontWeight:'700'}}>When to use AgroConnect</h1>
                    <h4>Common Issue</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam hic dolores consectetur excepturi, eveniet assumenda quasi magni molestias ratione.</p>

                    <h4>Specialist advice</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam hic dolores consectetur excepturi, eveniet assumenda quasi magni molestias ratione.</p>

                    <h4>Agro health issue</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam hic dolores consectetur excepturi, eveniet assumenda quasi magni molestias ratione.</p>
                </Col>
 
            </Row>
        </div>

    </Container>
 
  )
}

export default Whenuse