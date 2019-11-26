import React, { Component, Fragment } from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
