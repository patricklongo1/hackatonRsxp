import React, { Component, Fragment } from 'react';
import Header from './widgets/Header';
import Banner from './widgets/Banner';
import Footer from './widgets/Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Banner />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
