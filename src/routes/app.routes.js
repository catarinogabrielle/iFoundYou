import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Messages from '../pages/Messages';
import NewPost from '../pages/NewPost';
import Search from '../pages/Search';
import PostsUser from '../pages/PostsUser';
import IFoundYou from '../pages/IFoundYou';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="NewPost"
                component={NewPost}
                options={{
                    headerTintColor: '#7504b6',
                    headerStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            />

            <Stack.Screen
                name="PostsUser"
                component={PostsUser}
                options={{
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#7504b6'
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function AppRoutes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                style: {
                    backgroundColor: '#FFF',
                    elevation: 1.8,
                    borderTopWidth: 1.4,
                },

                activeTintColor: '#7504b6',

            }}
        >

            <Tab.Screen
                name="Home"
                component={StackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="search" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="IFoundYou"
                component={IFoundYou}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="heart" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="message-square" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default AppRoutes;