import React, { Component } from 'react';
import Myself from './img/myself.jpg';
import './Header.css'


class Header extends Component{
    render() {
        return(
           <div>
               <section class="hero is-medium is-light is-bold">
                <div class="hero-body">
                    <div class="container"> 
                        <div class="columns">
                            <div class="column is-full is-flex is-horizontal-center">
                                <figure class="image is-128x128 ">
                                    <img class="is-rounded" src={ Myself } alt=""/>
                                </figure>
                            </div>
                        </div>
                    <div class="pleaseWork">
                        <h1 class="title has-text-centered">
                            Full Stack Developer
                        </h1>
                    </div>
                    <h2 class="subtitle has-text-centered">
                    Expert Loan coordinator transitioned into programmer. Proven ability to work <br />hard and  deliver. Certified Full Stack Developer with a large span of programming utilities <br />and languages  such as JavaScript, React, Redux and Node.js. <br />Seeking a great company to grow and learn with!
                    </h2>
                    </div>
                </div>
            </section>
           </div>
        );
    }
}

export default Header;

{/* <div className="aboutMe">
                    <img src={ Myself } alt=""/>
                    <h1>Stephenna Jemae</h1>
                    <p>Loan coordinator who decided to switch into web development. </p>
                </div> */}

            //     <section class="hero is-medium  is-bold">
            //     <div class="hero-body">
            //         <div class="container">
            //     <article class="media">
            //         <div class="media-left">
            //             <figure class="image is-128x128">
            //                 <img class="is-rounded"src={ Myself } alt=""/>
            //             </figure>
            //         </div>
            //         <div class="media-content">
            //             <div class="content">
            //                 <p>
            //                     <strong>Stephenna Jemae</strong><small>  @sjcstephenna</small>
            //                     <br />
            //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            //                 </p>
            //             </div>
            //         </div>
            //     </ article>
            //     <br />
            //     <nav class="breadcrumb has-bullet-separator is-centered" aria-label="breadcrumbs">
            //         <ul>
            //             <li><a href="#">Resume</a></li>
            //             <li><a href="#">Skills</a></li>
            //             <li><a href="#">Projects</a></li>
            //             <li><a href="#">Projects</a></li>
            //         </ul>
            //     </nav>
        
            //         </div>
            //     </div>
            // </section>
