
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Consultataion = () => {
    const navigate = useNavigate()

    const handleCardClick = () =>{
        navigate('/consultationinfo')
    }
  return (
        
        <div className="container">
            <Header/>
            <h2 className=" select mt-5">Please Select a Speciality</h2>
            <div onClick={handleCardClick} className="d-flex flex-wrap mt-4">
            <div className=" box d-flex flex-wrap">
                <div className="left mt-3">
                    <img src="./src/assets/doc.png" alt="" style={{height:'70px',width:'70px'}} />
                </div>
                <div className="right ms-4 mt-4">
                    <span>General Physician</span>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>

            <div className=" box d-flex flex-wrap ms-4">
                <div className="left mt-3">
                    <img src="./src/assets/doc.png" alt="" style={{height:'70px',width:'70px'}} />
                </div>
                <div className="right ms-4 mt-4">
                    <span>General Physician</span>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>

            <div className=" box d-flex flex-wrap ms-4">
                <div className="left mt-3">
                    <img src="./src/assets/doc.png" alt="" style={{height:'70px',width:'70px'}} />
                </div>
                <div className="right ms-4 mt-4">
                    <span>General Physician</span>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>

            </div>
        </div>
  )
}

export default Consultataion