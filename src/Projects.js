import React, { Component } from 'react';
import './Projects.css';
import CatNannyVid from './img/CatNanny.mp4';
import hitup from './img/Screen Shot 2019-08-15 at 12.45.16 AM.png';

class Projects extends Component {
    render () {
        return ( 
            <section id="projects">
                <div class="projectsDiv" id="projects">
                <hr />
                <h1>Projects</h1>
                        <div class="columns column-gap">
                            <div class="column">
                                <div class="card">
                                    <div class="card-content">
                                        <p class="title is-flex is-horizontal-center">
                                        Cat Nanny Express
                                        </p>
                                        <video width="500" controls class="is-flex is-horizontal-center">
                                        <source src={ CatNannyVid } type="video/mp4"/>
                                    
                                        Your browser does not support HTML5 video.
                                        </video>
                                        <p class="subtitle is-flex is-horizontal-center">
                                        The goal of this single player game is to care for as many cats as possible within 60 seconds. Players have the option to groom, feed and play with cats. Not a cat lover? We added an option to care for dogs.This fun game was built wth a pet image Api, HTML, CSS and Javascript. 
                                        </p>
                                    </div>
                                    <footer class="card-footer">
                                        <p class="card-footer-item">
                                        <span>
                                            <a href="https://github.com/Stephenna/Cat-Nanny-Express">Github</a>
                                        </span>
                                        </p>
                                        <p class="card-footer-item">
                                        <span>
                                            <a href="http://cat-nanny-express.surge.sh/">Live Demo</a>
                                        </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                            <div class="column">
                                <div class="card">
                                    <div class="card-content">
                                        <p class="title is-flex is-horizontal-center">
                                        Hit Up
                                        </p>
                                        <figure class="image image is-sqaure">
                                            <img src={hitup} alt="" />
                                        </figure>
                                        <p class="subtitle is-flex is-horizontal-center">
                                        Hit Up is a chat app that allows you to communicate with others in chat rooms. This app was built in React, designed with Material UI, Node.js and Socket.IO.   
                                        </p>
                                    </div>
                                    <footer class="card-footer">
                                        <p class="card-footer-item">
                                        <span>
                                            Still developing  <a href="https://github.com/Stephenna/hitUp.github.io">Github</a>
                                        </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}

export default Projects;