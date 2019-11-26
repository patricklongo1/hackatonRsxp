import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Profile from './widgets/Profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/profile" component={Profile} />
        </Switch>
    );
}
