import {Container,Row,Col,Image} from 'react-bootstrap'
const Whyus = () => {
  return (
    <Container >
        <div className='uses'>
        <Row>
            <Col>
            <div className="whyuse">
          
                    <h2>Why Use AgroConnect ? </h2><hr></hr>

            </div>

            <div className='two'>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic itaque a velit</p>
            </div>

            <div className='two'>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic itaque a velit</p>
            </div>

            <div className='two'>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic itaque a velit</p>
           </div>

           <div className='two'>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic itaque a velit</p>
           </div>
           <div className='two'>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic itaque a velit</p>
           </div>
            </Col>
            <Col>
                <Image src="./src/assets/why-removebg.png"  className='' />

                
            </Col>
        </Row>

        </div>

</Container>
  )
}

export default Whyus