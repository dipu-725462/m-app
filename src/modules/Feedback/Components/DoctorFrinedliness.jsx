import React, { Component } from 'react';
import {View, Text, CheckBox, StyleSheet} from 'react-native';
import {doctorFriendliness} from '../Constants/constant';

class DoctorFrinedliness extends Component {
    render() {
        const {heading} = doctorFriendliness
         return(
             <View style={styles.card}>
                 <Text style={styles.subHeading}>{heading}</Text>
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
});


export default DoctorFrinedliness;
