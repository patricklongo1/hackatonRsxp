import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GlobalStyle } from './styles/global'

class Profile extends Component {
    render() {
        return (
            <GlobalStyle />
            <Header />
            <Footer />
        );
    }
}

export default Profile;
