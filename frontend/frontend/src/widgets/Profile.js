import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyle } from './styles/global';

class Profile extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Profile;
