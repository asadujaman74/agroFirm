import { Container ,Image} from "react-bootstrap"

const Flexpart = () => {
  return (
    <Container>
        <div className="main">

            <div className="flexdiv1">
            <Image src="./src/assets/msg.svg"  className='img-flex' fluid />
                <h5>Live Message</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flexdiv2">
            <Image src="./src/assets/delevery.svg"  className='img-flex' fluid />
            
                <h5>Package</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flexdiv3">
            <Image src="./src/assets/2.svg"  className='img-flex' fluid />
                <h5>Medicine</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flexdiv4">
            <Image src="./src/assets/online.svg"  className='img-flex' fluid />
                <h5>Order Online</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flexdiv5">
            <Image src="./src/assets/it.svg"  className='img-flex' fluid />
                <h5>IT Service</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    </Container>
  )
}

export default Flexpart