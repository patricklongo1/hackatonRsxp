import React from 'react';
import LogoStyle from './style';
import logo from '../../assets/images/logoHeader.svg'

const Logo = () => {
return <LogoStyle><img src={logo} alt="logo" /></LogoStyle>;
};

export default Logo;
