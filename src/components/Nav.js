import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['header', 'intro', 'first', 'second', 'cta', 'footer'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="header">
                    <a href="#">Home</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Objective</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">My Skills</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">My Work</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">My Achievements</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="footer">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
