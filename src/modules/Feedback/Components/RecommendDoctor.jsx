import React, { Component } from 'react';
import { View , Text} from 'react-native';
import {recommendDoctor} from '../Constants/constant';
import RadioButton from '../../Utils/Component/RadioButton';

class RecommendDoctor extends Component {
    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = (value) => {
      
    }

    render() {
        const {heading, options} = recommendDoctor;
        return (
            <View>
                <Text>{heading}</Text>
                <RadioButton options={options} onSelected={this.handleSelected} />
            </View>
        )
    }
}

export default RecommendDoctor;
