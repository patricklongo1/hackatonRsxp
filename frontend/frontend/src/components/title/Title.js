import React from 'react';
import SpanTitle from './style';

const Title = props => {
    return <SpanTitle style={{ color: props.color }}>{props.text}</SpanTitle>;
};

export default Title;
