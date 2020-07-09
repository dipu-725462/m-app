import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { userFeedback } from '../Constants/constant';

const MIN_FEEDBACK_LENGTH = 100;
class UserFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange = ({ nativeEvent }) => {
        const { text } = nativeEvent;
        (text.length >= 0 && this.setState({ count: text.length }));
    }

    render() {
        const { heading, tip, text } = userFeedback;
        let count = this.state.count;


        return (
            <View style={styles.card}>
                <Text style={styles.subHeading}>
                    {heading}
                </Text>
                <Text style={styles.tip}>
                    {tip}
                </Text>
               <TextInput
                    style={styles.feedback}
                    multiline={true}
                    onChange={this.handleTextChange}
                    placeholder={text}
                    placeholderTextColor="#14bef0"
                />
                <Text style={count > MIN_FEEDBACK_LENGTH ? styles.count_execeeded : styles.count}>{`${count}/100`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#e8e8f0",
        paddingHorizontal: 16,
        paddingBottom: 28,
    },
    heading: {
        fontSize: 20,
        lineHeight: 36,
        letterSpacing: 0.5,
        color: "#2d2d32"
    },
    subHeading: {
        fontWeight: "700",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 0.5,
        color: "#2d2d32"
    },
    tip: {
        fontSize: 16,
        color: "#787887",
        letterSpacing: 0.2,
        lineHeight: 24,
    },
    feedback: {
        height: 200,
        borderColor: "#cacad3",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        textAlignVertical: 'top',
        
    },
    count: {
        justifyContent: "flex-end",
        fontSize: 16,
        color: "#787887",
    },
    count_execeeded: {
        flexDirection: "row-reverse",
        fontSize: 16,
        color: "red",
    }
});
export default UserFeedback;
