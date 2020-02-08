import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic41 from '../assets/images/pic44.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import pic42 from '../assets/images/pic02.jpg'
import pic43 from '../assets/images/pic03.jpg'


import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic03.png'
import pic03 from '../assets/images/pic04.png'
import pic04 from '../assets/images/pic05.png'
import pic05 from '../assets/images/pic06.png'
import pic06 from '../assets/images/pic07.png'
import pic07 from '../assets/images/pic08.png'
import pic08 from '../assets/images/pic09.png'
import pic09 from '../assets/images/pic10.png'
import pic10 from '../assets/images/pic11.png'
import pic11 from '../assets/images/pic00.png'
import pic13 from '../assets/images/pic12.png'
import pic14 from '../assets/images/pic13.png'
import pic15 from '../assets/images/pic14.png'
import pic16 from '../assets/images/pic15.png'
import pic17 from '../assets/images/pic16.png'
import pic18 from '../assets/images/pic17.png'
import pic19 from '../assets/images/pic18.png'
import pic20 from '../assets/images/pic19.png'
import pic21 from '../assets/images/pic20.png'
import pic22 from '../assets/images/pic21.png'
import pic23 from '../assets/images/pic22.png'
import pic24 from '../assets/images/pic23.png'
import pic25 from '../assets/images/pic24.png'
import pic27 from '../assets/images/pic26.png'
import pic28 from '../assets/images/pic27.png'
import pic29 from '../assets/images/pic28.png'
import pic30 from '../assets/images/pic29.png'
import pic31 from '../assets/images/pic30.png'
import pic32 from '../assets/images/pic31.png'
import pic33 from '../assets/images/pic32.png'
import pic34 from '../assets/images/pic33.png'
import pic35 from '../assets/images/pic34.png'
import pic36 from '../assets/images/pic35.png'
import pic37 from '../assets/images/pic36.png'
import pic38 from '../assets/images/pic37.png'
import pic39 from '../assets/images/pic41.png'
import pic40 from '../assets/images/pic42.png'



class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Objective</h2>
                </header>
                <p>
                Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. To work a dynamic and challenging environment where I can optimally utilize my professional skills. Hardworking, honest, responsible and aspiring professional seeking as a position member of your team that requires creativity, hard work and multitasking.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={pic41} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Skills</h2>
            </header>
            <ul className="features">
              <li>
              <span className="image">
                <img src={pic08}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Python</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic09}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Numpy</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic10}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Pandas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic07}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Matplotlib</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic06}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Neural Network</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic05}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Deep Learning</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic02}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Keras</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic01}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Scikit Learn</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic03}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Tensorflow</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic04}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Artificial Intelligence</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic11}  height="160px" width="auto"  alt="" />
              </span>
                <h3>HTML5</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic13}  height="160px" width="auto"  alt="" />
              </span>
                <h3>CSS</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic14}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Saas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic15}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Java Script</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic17}  height="160px" width="auto"  alt="" />
              </span>
                <h3>NodeJs</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic16}  height="160px" width="auto"  alt="" />
              </span>
                <h3>React</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic18}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Gatsby</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic19}  height="160px" width="auto"  alt="" />
              </span>
                <h3>NPM</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic20}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Flask</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic21}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Terraform</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic22}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Windows</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic23}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Ubuntu</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic24}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Git</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic25}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Docker</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic27}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Kubernetes</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic28}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Jupyter Notebook</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic29}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Visual Studio</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic30}  height="160px" width="auto"  alt="" />
              </span>
                <h3>GraphQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic31}  height="160px" width="auto"  alt="" />
              </span>
                <h3>MongoDb</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic32}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Postman</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic38}  height="160px" width="auto"  alt="" />
              </span>
                <h3>MySQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic33}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Rust</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic34}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Lean Startup</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic35}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Agile</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic36}  height="160px" width="auto"  alt="" />
              </span>
                <h3>DevOps</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic37}  height="160px" width="auto"  alt="" />
              </span>
                <h3>Desing Thinking</h3>
              </li>

            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>My Work</h2>
            </header>
            
            <ul className="statistics">
              <li className="style1">
              <h2>Artificial Intelligence</h2>
              <h3>Deep Learning Projects</h3>
              <p>I trained the model with all following aspects:</p>
              <ul>
                <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                <li>Baseline Model With Data Standarization</li>
                <li>Evaluate a Smaller Network (Small Dense Layers)</li>
                <li>Evaluate a very Smaller Network that Underfit</li>
                <li>Evaluate a larger Network (Large Dense Layers)</li>
                <li>Evaluate a very Larger Network that Overfit</li>
                <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                <li>Use Dropout and Weight Regularization for best results</li>
              </ul>
                    
                    <h3>1- Binary Classification Sonar Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>2- Multiclass Classification Iris Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>3- Regression Housing Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>4- Save & Load Keras Model</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h3>5- Face Detection with Keras MTCNN</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p>
                   
              </li>
              <li className="style2">
              <h2>Python Flask Project</h2>
              <h3>1- GraphQl-Mongodb-API</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h3>2- PostgreSQL-Todo-APP-Unit-Testing</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h3>3- Todo-APP-Unit-Testing-Mongodb</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>
              </li>
              <li className="style3">
              <h2>Gatsby React Project</h2>
              <p>I design this websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.<br />
                    Some of the following websites are made by me</p>
                    <h3>1- Umair Zaki CV</h3>
                    <p>to see my website <a href="https://umairzakicv.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>2- Umair Zaki Resume</h3>
                    <p>to see my website <a href="https://umairzakiresume.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>3- Umair Zaki</h3>
                    <p>to see my website <a href="https://umairzaki.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>4- PIAIC New</h3>
                    <p>to see my website <a href="https://piaic-new.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>5- PIAIC For Learning</h3>
                    <p>to see my website <a href="https://peaceful-goldwasser-23267b.netlify.com/" target = "_blank"> Click Here</a></p>
              </li>
              <li className="style4">
              <div className="spotlight">
              <div className="content">
                  <h1>Upwork</h1>
                  <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
                </div>
                <span className="image">
                <img src={pic39} alt="" />
              </span>
                </div>
              </li>
              <li className="style5">
              <div className="spotlight">
              <div className="content">
              <h1>Fiverr</h1>
            <p>to see my Fiverr Profile <a href="https://www.fiverr.com/users/umairjamstackai/seller_dashboard" target = "_blank"> Click Here</a></p>
                </div>
                <span className="image">
                <img src={pic40} alt="" />
              </span>
                </div>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>My Achievements</h2>
            <h3>Microsoft Technology Associate</h3>
                            <h4>Introduction to programming using Python</h4>
                            <h5>I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.</h5>
            </header>
            <span className="image2">
                <img src={pic42}  alt="" />
              </span>
              </section>
              <section id="cta" className="main special">
              <header className="major">
      
            <h3>Coursera Certificate</h3>
                            <h4>AI For Everyone deeplearning.ai</h4>
                            <h5>I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019.
Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.</h5>
            </header>
            <span className="image2">
                <img src={pic43} alt="" />
              </span>
              </section>
          
        </div>
      </Layout>
    )
  }
}

export default Index
