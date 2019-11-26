import React, { Component, Fragment } from 'react';
import Header from './widgets/Header';
import Banner from './widgets/Banner';
import Contadores from './widgets/Contadores'
import Footer from './widgets/Footer';
import InterEscola from './widgets/InterEscola';

import GlobalStyle from './styles/global';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Header />
                <Banner />
                <InterEscola />
                <Contadores />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
