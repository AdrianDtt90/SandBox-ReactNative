import React from "react";
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Dimensions } from "react-native";

import LoginScreen from '@screens/Login';
import HomeScreen from '@screens/Home';
import HomeScreen2 from '@screens/Home2';

import SideBar from '@components/SideBar';


const deviceWidth = Dimensions.get("window").width;
const routes = ["Home", "Home3"];

const Home = StackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Bienvenido',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
        }),
    }
);

const Home2 = StackNavigator(
    {
        HomeScreen2: {
            screen: HomeScreen2,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Segundo Item',
            headerStyle: {
            backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }),
    }
);

const navigationScreens = DrawerNavigator({
    Home: { screen: Home },
    Home3: { screen: Home2 }
}, {
    initialRouteName: "Home",
    contentComponent: props => <SideBar routes={routes} {...props} />
});

const navigationApp = StackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
        },
        navigationScreens: {
            screen: navigationScreens
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed',
            header: null
        }),
    }
);

export default navigationApp;