import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/app.css';

//Views & components
import Home from './views/home';
import People from './views/people';
import Contact from './views/contact';
import Header from './components/header';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/people" component={People} />
                        <Route path="/contact" component={Contact} />
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}
