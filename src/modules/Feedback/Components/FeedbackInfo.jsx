import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { feedbackInfo } from '../Constants/constant';

const FeedbackInfo = () => {
    const {text} = feedbackInfo
    return (
        <View style={styles.feedbackInfo}>
            <Text style={styles.feedbackInfo_text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    feedbackInfo : {
        padding : 10,
        backgroundColor : "#2f3a9a",
    },
    feedbackInfo_text : {
        color : "white",
        fontSize : 14,
        lineHeight : 24,
    }
});

export default FeedbackInfo;