import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import InterEscola from '../widgets/InterEscola';
import Challenge from '../widgets/Challenge';
import Banner from '../widgets/Banner';
import Contadores from '../widgets/Contadores';
import MainRank from '../widgets/MainRank';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <>
                        <Banner />
                        <Challenge />
                        <InterEscola />
                        <Contadores />
                    </>
                )}
            />
            <Route exact path="/login" component={Banner} />
            <Route
                exact
                path="/rank"
                render={() => (
                    <>
                        <MainRank />
                    </>
                )}
            />
        </Switch>
    );
};

export default Routes;
