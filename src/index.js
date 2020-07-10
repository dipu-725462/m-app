import React from 'react';
import {registerRootComponent} from "expo";
import Navigation from './Navigation';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import FeedbackFormReducer from './Redux/Feedback/Reducer';
const store = createStore(FeedbackFormReducer);

function App () {
  return (
  <Provider store={store}>
     <Navigation />
  </Provider>
  );
}

export default registerRootComponent(App);
