import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SignIn from './pages/SignIn';

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn: createSwitchNavigator({
            SignIn,
        }),
        Tab: createBottomTabNavigator(
            {
                Dashboard,
                Profile,
            },
            {
                resetOnBlur: true,
                tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: '#fff',
                    inactiveTintColor: '#rgba(255, 255, 255, 0.6)',
                    style: {
                        backgroundColor: '#0d759e',
                    },
                },
            },
        ),
    }),
);

export default Routes;
