import React from 'react'

import logo from '../assets/images/pic43.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} height="280vw" width="auto" alt="" /></span>
        <h1>Umair Zaki</h1>
        <p>Web Developer UI - JAMStack <br />
           Machine Learning AI Services</p>
    </header>
)

export default Header
