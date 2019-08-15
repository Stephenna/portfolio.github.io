import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-bulma-components'
import './index.css';
// import App from './App';
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'
import Connect from './Connect'



import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Header title="Stephenna Jemae" />
                <Projects />
                <Skills />
                <Connect />
                
               
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
