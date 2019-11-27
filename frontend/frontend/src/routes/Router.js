import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import InterEscola from '../widgets/InterEscola';
import Challenge from '../widgets/Challenge';
import Banner from '../widgets/Banner';
import Contadores from '../widgets/Contadores';
import Aluno from '../widgets/Aluno';
import MainRank from '../widgets/MainRank';

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
            <Route exact path="/login" component={Aluno} />
            <Route
                exact
                path="/rank"
                render={() => (
                    <Fragment>
                        <MainRank />
                    </Fragment>
                )}
            />
        </Switch>
    );
};

export default Routes;
