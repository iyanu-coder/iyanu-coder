import React from 'react';
import '../index.css'
import './style/home.css'
import Footer from './footer'
// import './style/skill.css'



const Home =()=>{

    return(
        <>
    <div className="headerimage">
       <div className="container">
        
            <div className="row">
                    {/* <p className="hello">Hello</p> */}

                <div className="col-sm-4">
                        <div>
                            <img alt="" className="prof" src="images/IMG_7637.png" />
                        </div>
                </div>


                
                <div className="col-sm-7 ">

                        
                    <h3>AKINYEMI IYANU OLUWASEYI</h3>
                    <h5>Web Developer</h5> <br/>
                
                  
                    <h6> <img alt=""  src="images/Messageicon.png" /> akinyemiiyanu45@gmail.com</h6>
                    <h6> <img alt=""  src="images/phoneicon.png"/> +234 903 729 8121</h6>
                    <h6> <img alt=""  src="images/Locationicon.png"/> Oyo State, Nigeria</h6><br/>


                <div className="media">
                    <a href=""><img alt="" src="images/Facebookicon.png" /></a>
                    <a href=""><img alt=""  src="images/Twittericon.png" /></a>
                    <a href="https://github.com/iyanu-coder"><img alt=""  src="images/GitHubicon.png" /></a>
                    <a href="https://www.linkedin.com/in/iyanu-akinyemi-15b670214/"><img alt=""  src="images/LinkedInicon.png" /></a>
                </div>

                    </div>


                </div>
            </div>
      
       </div>

       <Footer/>

        </>
    )

}

export default Home;