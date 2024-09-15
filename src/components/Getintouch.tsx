import { Container } from "react-bootstrap"

const Getintouch = () => {
  return (
    <Container className="container-fluid img">
           <div className="mainform" style={{padding:"15px", margin:'50px 55px'}}  >
            <div className="formheader">
                <h2>Get in touch with us</h2>
                <p>We're here to help. Send your query or question below and provides us with as much details as possilbe
                We will answer your query as soon as possible. We aim to reply to your query within 24 hours</p>
            </div>
            <form className="row g-3">
            <div className="formbody">
                
        
                <label  className="visually-hidden" >Full Name</label>
                <input style={{width:'50%', background:'#f3f4f6'}} type="text" className="form-control mb-3" id="inputPassword2" placeholder="Full Name"/>
           
                <label  className="visually-hidden">Full Name</label>
                <input style={{width:'50%', background:'#f3f4f6'}} type="email" className="form-control mb-3" id="inputPassword2" placeholder='Email'/>
          

                    <select style={{background:'#f3f4f6'}} className="form-select mb-3 " aria-label="Default select example" >
                        <option selected>whats your concern</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div className="mb-3" >
                        <textarea  style={{height:'125px', background:'#f3f4f6'}} placeholder="Your Querry" className="form-control" id="exampleFormControlTextarea1"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
            </div>
            </form>

           </div>
    </Container>
  )
}

export default Getintouch