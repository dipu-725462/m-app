import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from '../../Utils/Component/RadioButton';
import {waitTime} from '../Constants/constant';


class WaitTime extends Component {
    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected = (value) => {
      
    }


    render(){
        const {heading, options} = waitTime;

        return (
            <View style={styles.card}>
                <Text style={styles.subHeading}>{heading}</Text>
                <RadioButton options={options} onSelected={this.handleSelected} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card : {
        marginTop : 10,
        borderBottomWidth: 2,
        borderBottomColor : "#e8e8f0",
       paddingHorizontal : 16,
       paddingBottom: 8,
    },
    heading : {
        fontSize: 20,
        lineHeight: 36,
        letterSpacing : 0.5,
        color : "#2d2d32"
    },
    subHeading : {
        fontWeight : "700" ,
        fontSize : 16,
        marginVertical : 20,
        letterSpacing : 0.5,
        color : "#2d2d32"
    }
})


export default WaitTime;