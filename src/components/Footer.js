import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
    <h1>Profile</h1>
                        <ul>
                        <li>Father: Muhammad Zaki</li>
                        <li>CNIC: 42301-6362390-9</li>
                        <li>Date of Birth: 16-July-1989</li>
                        <li>Marital Status: Single</li>
                        <li>Country: Pakistan</li>
                        </ul>
                        
    </section>
    <section>
    <h1>Education</h1>
                        <ul>
                        <li>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</li>
                        <li>Intermediate from Karachi Board (Commerce Grade "C" 2010)</li>
                        <li>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</li>  
                        </ul>
    </section>
    <section>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Plot # 1/29, 4th Floor, Flat # A7,
Block 5b, Nazimabad,
Karachi, Pakistan.</dd>
        <dt>Phone</dt>
        <dd>+92 313-287-3668</dd>
        <dt>Email</dt>
        <dd>
          umairzakicnbc@gmail.com
        </dd>
      </dl>
      <ul className="icons">
        <li>
        <a href="https://www.facebook.com/umair.zaki.12" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
        </li>
        <li>
        <a href="https://stackoverflow.com/users/12326848/umairzaki" target="_blank" className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a>
        </li>
        <li>
        <a href="https://github.com/UmairZaki" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/umair-zaki-8353a918b/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Umair Zaki | 0313273668
    </p>
  </footer>
)

export default Footer
