import React, { Component, Fragment } from 'react';
import Header from './widgets/Header';
import Banner from './widgets/Banner';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Banner />
            </Fragment>
        );
    }
}

export default App;
