import React, { Component } from 'react';
import './Skills.css'

class Skills extends Component {
    render () {
        return (
            <section id="skills">
                <div class="skillsCard">
                    <hr />
                    <div class="card">
                        <div class="card-content ">
                            <p class="title is-flex is-horizontal-center">
                            Skill Set:

                            </p>
                        <div class="icons is-flex is-horizontal-center">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3"></i>
                        <i class="fab fa-js"></i>
                        <i class="fab fa-bootstrap"></i>
                        <i class="fab fa-react"></i>
                        <i class="fab fa-node"></i>
                        <i class="fab fa-github"></i>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;