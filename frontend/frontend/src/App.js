import React, { Component, Fragment } from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import Routes from './routes/Router';
import GlobalStyle from './styles/global';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Header />

                <Routes></Routes>

                <Footer />
            </Fragment>
        );
    }
}

export default App;
