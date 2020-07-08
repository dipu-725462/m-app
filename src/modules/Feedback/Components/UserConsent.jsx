import React, { Component } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import { userConsent } from '../Constants/constant';

class UserConsent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        console.log("called called ");
        const { note, text } = userConsent;
        return (
            <View style={styles.wrapper}>
                <View style={styles.user_consent__wrapper}>
                    <CheckBox
                        value={this.state.checked}
                        onChange={this.handleChange}
                    />
                    <Text style={styles.checkBox_label}>{text}</Text>
                </View>
                <Text style={styles.consent_info}>{note}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 16
    },
    user_consent__wrapper: {
        flexDirection: "row",
        paddingVertical: 16
    },

    checkBox_label: {
        fontSize: 16,
        color: "#2d2d32",
        fontWeight: "700",
        paddingLeft: 10
    },
    consent_info: {
        fontSize: 14,
        color: "#2d2d32",
    },
})

export default UserConsent;
