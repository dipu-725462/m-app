import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import FeedbackFormScreen from '../Screens/Feedback';

const RootStack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <RootStack.Navigator> */}
                <FeedbackFormScreen />
            {/* </RootStack.Navigator> */}
        </NavigationContainer>
    )
}

export default Navigation;
