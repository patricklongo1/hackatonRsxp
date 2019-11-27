import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import InterEscola from '../widgets/InterEscola';
import Challenge from '../widgets/Challenge';
import Banner from '../widgets/Banner';
import Contadores from '../widgets/Contadores';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <Fragment>
                        <Banner />
                        <Challenge />
                        <InterEscola />
                        <Contadores />
                    </Fragment>
                )}
            />
            <Route exact path="/login" component={Banner} />
        </Switch>
    );
};

export default Routes;
