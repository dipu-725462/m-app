import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, CheckBox, Radio, View } from 'react-native';
import RadioButton from '../../Utils/Component/RadioButton';
import { render } from 'react-dom';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = (value) => {
        // console.log("check box pressed ",value);
    }

    render() {
        const options = [
            {
                key: 'true',
                text: 'Yes',
            },
            {
                key: 'false',
                text: 'NO',
            }
        ];
        return (
            <View>
                <Text>Hero</Text>
                <RadioButton options={options} onSelected={this.handleSelected} />
            </View>
        )
    }
}

export default Feedback;