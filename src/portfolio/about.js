import React from 'react';
import './style/about.css';
import './style/skill.css';
import './style/footer.css';
import Footer from './footer';



const About =()=>{

    return(
        <>
            <header>

                <div className="container">
                    <div className="row" >
                        <div className="col-6">
                
                             {/* <img className="about"  src="images/ab-img.png" /> */}
                             <img alt='' className="about" src="images/ab-img.png" />
                           

                        </div>
                        <div className="col-md-6 ">

                            <div>

                                <h1>About Me</h1><br/>
                               <p> Hello, I’m Iyanu, web-developer based in Nigeria. I am good <br/>
                                    in web design & building and customization.</p>

                                    <input type="submit" value="Html" />
                                    <input type="submit" value="Css" />
                                    <input type="submit" value="Wordpress" />
                                    <input type="submit" value="Javascript" />
                                    <input type="submit" value="React Js" /><br/><br/>
                                    <input type="submit" value="Vue Js" />

                                    <input type="submit" value="Angular Js" />
                                    <input type="submit" value="MySql" />
                                    <input type="submit" value="Php" />
                                    <input type="submit" value="Node Js" /> <br/> <br/>
                                    <input type="submit" value="Java" /> 
                                    <input type="submit" value="C++" />
                            </div>

                        </div>
                    </div>

      <section id="resume" class="resume">


        <div class="section-title">
          <h2>Resume</h2>
            <h3 class="resume-title">PROFILE</h3>
        </div>
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <div class="resume-item pb-0">
              <h4>Akinyemi Iyanu O</h4>
              <p><em>•	Hardworking Web Developer knowledgeable in user interface, Testing and Debugging processes. 
            Bringing forth expertise in design, <br/>Installation, 
            Testing and Maintenance of Web systems. Equipped with a diverse and promising skill-set. 
            Proficient in an assortment of technologies,<br/> including JavaScript, Angular Js, React Js, Vue Js, Php and mySql Database.
             Able to efficiently self-manage during independent projects as well as<br/> collaboration in a team setting and focused on completing work quickly to consistently exceed targets. 
             Reliable team member accustomed to taking on challenging tasks. <br/>Dedicated to business success.</em></p>
              <ul>
                <li>Oyo State, Nigeria</li>
                <li>(+234) 903 729 8121</li>
                <li>akinyemiiyanu45@gmail.com</li>
              </ul>
            </div>
          

          </div>

        <div id='edu' className='col-lg-6'>
            <h3 class="resume-title-edu">EDUCATION</h3>
            <div class="resume-item">
              <h4>HIGH SCHOOL</h4>
              <p><em>Government Science College, Ayede Ekiti,<br/> Ekiti State. Nigeria</em></p>
              <h5>2012 - 2018</h5>
            </div>
            <div class="resume-item">
            

              <h4>NATIONAL DEPLOMA: SOFTWARE ENGINEERING</h4>
              <p><em>SQI College of ICT, Ogbomoso, <br/>
              Oyo State. Nigeria</em></p>
              <h5>2020 - Till Date</h5>
            </div>

            <div class="resume-item">
            

            <h4>PURE AND APPLLIED PHYSICS </h4>
            <p><em>Ladoke Akintola University of Technology, Ogbomoso, <br/>
            Oyo State. Nigeria</em></p>
            <h5>2022 - Till Date</h5>
          </div>
            
        </div>


     
        </div>
        

    </section>


    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div id="one" className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div id="two" className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div id="three" className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Angular Js <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="six" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MongoDB <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="nine" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">C++ <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="eleven" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="four" className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div id="five" className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


            <div className="progress">
              <span className="skill">React js <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="seven" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node Js <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="eight" className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MySql <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="ten" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Java <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="twelve" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
           

          </div>

        </div>

      </div>
    </section>

                </div>  

            </header>

           <Footer/>
        
        </>
    )

}

export default About;