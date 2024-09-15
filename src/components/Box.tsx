import { Container,Row,Col,Card } from "react-bootstrap"


const Box = () => {
  return (
    <Container className="container-fluid" style={{marginTop:'30px'}}>
        <Row>
        <Col  md={1}>
          
        </Col>


        <Col className="d-flex " style={{marginTop:'50px'}} md={8}>
        <Card className="me-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{height:'100px'}} src="../src/assets/fruits/fruits1.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>

         <Card className="me-3" style={{ width: '18rem' }}>
            <Card.Img  style={{height:'100px'}}  variant="top" src="../src/assets/fruits/fruits2.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'100px'}}  variant="top" src="../src/assets/fruits/fruits3.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>
        
        </Col>

        <Col md={1}>
        
        </Col>
        
      </Row>




      <Row>
        <Col  md={1}>
          
        </Col>


        <Col className="d-flex " style={{marginTop:'20px'}} md={8}>
        <Card className="me-3" style={{ width: '18rem' }}>
            <Card.Img style={{height:'100px', borderBottom:'1px solid #f3f4f6 '}}  variant="top" src="../src/assets/fruits/fruits4.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>

         <Card className="me-3" style={{ width: '18rem' }}>
            <Card.Img style={{height:'100px'}}  variant="top" src="../src/assets/fruits/fruits5.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'100px'}}  variant="top" src="../src/assets/fruits/fruits6.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button className="btn btn-primary">details....</button>
            </Card.Body>
         </Card>
        
        
        
        </Col>



        <Col md={1}>
         
        </Col>
      </Row>





    </Container>
  )
}

export default Box