import React, { Component } from 'react';
import './Navbar.css';
import resume from './img/StephCorryResume.PDF';

class Navbar extends Component {
    render (){
        return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <a class="navbar-item">
                <h1> Stephenna Jemae</h1>
                </a>
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="" width="112" height="28" alt="" />
                    </a>
                   
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href={resume}>
                            Resume
                        </a>

                        <a class="navbar-item" href="#skills">
                            Skills
                        </a>

                        <a class="navbar-item" href="#projects">
                            Projects
                        </a>   
                        <a class="navbar-item" href="#connect">
                            Contact
                        </a>    
                        
                    </div>
                </div>
            </nav>
        </div>

        );
    }
}

export default Navbar;
{/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
</a> */}