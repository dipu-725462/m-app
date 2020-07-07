import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import FeedbackScreen from '../Screens/Feedback/index';

const navigator = createStackNavigator({
    Feedback : FeedbackScreen
},{
    initialRouteName : 'Feedback',
    defaultNavigationOptions : {
        /**
         *  can be used to customize the header, displayed for all screens.
        */
       title : "Give Feedback"

    }
});

export default createAppContainer(navigator);