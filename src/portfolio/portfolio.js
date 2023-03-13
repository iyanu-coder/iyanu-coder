import React from 'react';
import './style/portfolio.css';
import Footer from './footer'




const Portfolio =()=>{

    return(
        <>  
    <div className="header">



    <div class="container">
        <h2>MY PORTFOLIO</h2>        
        {/* first */}
    <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/Scientific-Calculator-PNG-Pic.png" />
                    <div id='title' className="container" style={{width: "48rem"}}>
                    <h5 style={{marginLeft: "-2px"}} className="card-title">SCIENTIFIC CALCULATOR</h5>
                        <a href='https://github.com/iyanu-coder/scientific-calculator' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>


            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/quiz.jpg" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">QUIZ APP</h5>
                        <a href='https://github.com/iyanu-coder/Quiz-app' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>


          


       </div><br/><br/>

        {/* second */}
       <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/tictactoe.jpg" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">TIC-TAC-TOE</h5>
                        <a href='https://github.com/iyanu-coder/Tic-Tac-Toe' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>

            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/portfolio.jfif" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">MY PORTFOLIO WEBSITE</h5>
                        <a href='https://github.com/iyanu-coder/myportfolio' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>
    

       </div><br/><br/>

       {/* third */}
       <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/shopping.png" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">SIMPLE INVENTRY</h5>
                        <a href='https://github.com/iyanu-coder/budget-App' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>

            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/shopping2.png" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">SIMPLE SHOPPING SITE </h5>
                        <a href='https://github.com/iyanu-coder/Online-Shopping' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>

                
       </div>


            <div className="row">
                
            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/blog.jpg" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">SIMPLE BLOG</h5>
                        <a href='https://github.com/iyanu-coder/simpleblog' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>

            <div className="col-sm-4 d-flex justify-content-center align-item-center">
                <div className="card text-dark mt-2"> 
                <img alt="" className="prof" src="images/rms2.png" />
                    <div className="container" style={{width: "48rem"}}>
                        <h5 style={{marginLeft: "-20px"}} className="card-title">RMS </h5>
                        <a href='https://github.com/iyanu-coder/RMS' className="btn btn-light">Read more<span class="text-primary">&rarr;</span></a>
                    </div>
					
                </div>
				
            </div>

            </div>


       
    </div>
    </div>
<Footer />

    
 
        </>
    )
    
}

export default Portfolio;