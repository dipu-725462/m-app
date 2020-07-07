import React from 'react';
import {registerRootComponent} from "expo";
import Feedback from './modules/Feedback/Components/index';

function App () {
  return (
    <Feedback />
  );
}

export default registerRootComponent(App);
