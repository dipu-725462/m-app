import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Feedback from '../modules/Feedback/Components';
import AddIssues from '../modules/Feedback/Components/AddIssues';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Give Feedback" component={Feedback} />
                <Stack.Screen name= "Add Issues" component={AddIssues} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;