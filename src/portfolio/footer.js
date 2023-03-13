import React from "react";
import './style/footer.css'

const Footer = ()=>{

    return(

        <>
        <div class="headercolor">
            <div className='container' id='container'>       
                    <div className="row justify-content-center">
              <div class="col-sm-3 border-right">
                  <div class="text-center">
  
                  <h4>USEFUL LINKS</h4>
                    <p> Home</p> <br/>
                    <p>About</p><br/>
                    <p>Portfolio</p><br/>
                    <p>Contact</p><br/>
                  </div>
              </div>
  
              <div class="col-sm-3 border-right">
                  <div  className="text-center">
                    <h4>PROJECTS</h4>
                     <p> Simple Blog </p><br/>
                     <p>RMS</p><br/>
                     <p>Love Calculator </p><br/>
                     <p>Hotel Management</p> <br/>
                  </div>
              </div>
  
              <div className="col-sm-3">
                  <div  className="text-center">
                  <h4>USEFUL LINKS</h4>
                     <p>Home</p> <br/>
                     <p>About</p> <br/>
                     <p>Portfolio</p><br/>
                     <p>Contact</p><br/>
                  </div>
              </div>
  
          </div>

                </div>
        </div>

        </>
    )
}

export default Footer;