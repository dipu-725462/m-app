import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Feedback from '../../modules/Feedback/Components';
import AddIssues from '../../modules/Feedback/Components/AddIssues';

const FeedbackFormStack = createStackNavigator();

const FeedbackFormScreen = () => {
    return (
        <FeedbackFormStack.Navigator initialRouteName="Give Feedback">
            <FeedbackFormStack.Screen name="Give Feedback" component={Feedback} />
            <FeedbackFormStack.Screen name= "Add Issues" component={AddIssues} />
        </FeedbackFormStack.Navigator>
    )
}

export default FeedbackFormScreen;
