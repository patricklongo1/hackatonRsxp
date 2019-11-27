import React, { Component } from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import Routes from './routes/Router';
import GlobalStyle from './styles/global';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Header />

                <Routes />

                <Footer />
            </>
        );
    }
}

export default App;
