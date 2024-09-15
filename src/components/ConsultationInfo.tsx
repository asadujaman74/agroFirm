import Header from "../components/Header"
const ConsultationInfo = () => {
  return (
   <div className="container">
    <Header/>
    <section className="mt-4 row mt-5">
    <nav className="col-3">
        <div>
            <label className="form-label">Select Any</label>
            <form action="">

                <div>
                <input type="checkbox" />
                <label className="label-text ">online now</label>
                </div>

                <div>
                <input type="checkbox" />
                <label className="label-text">available for next 2 hours</label> 
                </div>

                <div>
                <input type="checkbox" />
                <label className="label-text">available today</label> 
                </div>

                <div>
                <input type="checkbox" />
                <label className="label-text ">agro doctor only</label> 
                </div>
            </form>

            <div className="rating-section mt-3">
            <label className="form-label m-0" >Select Rating</label>
                <div className="icon-star ">
                    <span className="bi bi-star me-2"></span>
                    <span className="bi bi-star me-2"></span>
                    <span className="bi bi-star me-2"></span>
                    <span className="bi bi-star me-2"></span>
                    <span className="bi bi-star me-2"></span>
                </div>
            </div>

            <div className="sort-by-section mt-4">
                <label className="form-label">Sort By</label>

                <div>
                <input type="radio"  checked />
                <label className="label-text ">Relevance (Default)</label>
                </div>

                <div>
                <input type="radio" />
                <label className="label-text ">Popularity</label>
                </div>


                <div>
                <input type="radio" />
                <label className="label-text ">Fees: Low to High</label>
                </div>

                <div>
                <input type="radio" />
                <label className="label-text ">Fees: High to Low</label>
                </div>

                <div>
                <input type="radio" />
                <label className="label-text ">Rating</label>
                </div>

                <div>
                <input type="radio" />
                <label className="label-text ">Experienc</label>
                </div>

                <div>
                <input type="radio" />
                <label className="label-text ">Ranking</label>
                </div>




            </div>
            
            
        </div>

    </nav>
   
    <main className="col-9">
        <h6 className="top-text"><span className="number-text">1033</span> Doctors found in General Physician department</h6>
        <div className="main-div d-flex flex-wrap bg-white">

            <div className=" ms-2 doc-info d-flex flex-wrap col-5 mt-2">
                <div>  <img src="./src/assets/doctor.jpg" alt="" style={{height:'100px',width:'100px'}} /></div>
                <div className="div-body ms-3 mt-2">
                    <h6 className="card-title">Dr. Shafanur Rahman</h6>
                    <p className="card-sub-title" style={{lineHeight:'100%'}}>MBBS</p>
                    <p className="heading" style={{lineHeight:'10%'}}>specialist</p>
                    <p style={{lineHeight:'5%'}}>General Physician</p>
                </div>
            </div>

            <div className=" col-4 mt-3">
                <div className="middle-text">
                <p className="m-0 heading" >Working in</p>
                <p className="m-0 bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="main-footer d-flex flex-wrap ">
                    <div className="left-footer">
                        <p className="m-0">Total Experience</p>
                        <p className="bold">8+ years</p>
                    </div>
                    <div className="right-footer ms-5">
                        <p className="m-0">Total Rating</p>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                    </div>

                </div>
        
            </div>

            <div className="doc-info col-3"> 
            
            </div>
        </div>




        <div className="main-div d-flex flex-wrap bg-white mt-3">

            <div className=" ms-2 doc-info d-flex flex-wrap col-5 mt-2">
                <div>  <img src="./src/assets/doctor.jpg" alt="" style={{height:'100px',width:'100px'}} /></div>
                <div className="div-body ms-3 mt-2">
                    <h6 className="card-title">Dr. Shafanur Rahman</h6>
                    <p className="card-sub-title" style={{lineHeight:'100%'}}>MBBS</p>
                    <p className="heading" style={{lineHeight:'10%'}}>specialist</p>
                    <p style={{lineHeight:'5%'}}>General Physician</p>
                </div>
            </div>

            <div className=" col-4 mt-3">
                <div className="middle-text">
                <p className="m-0 heading" >Working in</p>
                <p className="m-0 bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="main-footer d-flex flex-wrap ">
                    <div className="left-footer">
                        <p className="m-0">Total Experience</p>
                        <p className="bold">8+ years</p>
                    </div>
                    <div className="right-footer ms-5">
                        <p className="m-0">Total Rating</p>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                    </div>

                </div>
                
            </div>

            <div className="doc-info col-3"> 
                    
            </div>
        </div>



        <div className="main-div d-flex flex-wrap bg-white mt-3">

            <div className=" ms-2 doc-info d-flex flex-wrap col-5 mt-2">
                <div>  <img src="./src/assets/doctor.jpg" alt="" style={{height:'100px',width:'100px'}} /></div>
                <div className="div-body ms-3 mt-2">
                    <h6 className="card-title">Dr. Shafanur Rahman</h6>
                    <p className="card-sub-title" style={{lineHeight:'100%'}}>MBBS</p>
                    <p className="heading" style={{lineHeight:'10%'}}>specialist</p>
                    <p style={{lineHeight:'5%'}}>General Physician</p>
                </div>
            </div>

            <div className=" col-4 mt-3">
                <div className="middle-text">
                <p className="m-0 heading" >Working in</p>
                <p className="m-0 bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="main-footer d-flex flex-wrap ">
                    <div className="left-footer">
                        <p className="m-0">Total Experience</p>
                        <p className="bold">8+ years</p>
                    </div>
                    <div className="right-footer ms-5">
                        <p className="m-0">Total Rating</p>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                        <span className="bi bi-star-fill me-1"></span>
                    </div>

                </div>
                
            </div>

            <div className="doc-info col-3"> 
                    
            </div>
        </div>
    </main>


    

   </section>

   </div>
  )
}

export default ConsultationInfo