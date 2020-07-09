import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { patientIssues } from '../Constants/constant';
import AddIssues from './AddIssues';
class PatientIssues extends Component {
    render() {
        const { heading, problemsPlaceholder } = patientIssues;
        const {navigation} = this.props;
        return (
            <View style={styles.card}>
                <Text style={styles.subHeading}>
                    {heading}
                </Text>
                <View>
                    <Text>{problemsPlaceholder}</Text>
                </View>

                <TouchableOpacity style={styles.addIssues_wrapper} onPress={()=> navigation.navigate("Add Issues")} >
                    <Text style={styles.addIssues_text}>
                        Add More
                    </Text>
                    <Text style={styles.addIssues_icon}>+</Text>
                </TouchableOpacity>
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
    subHeading: {
        fontWeight: "700",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 0.5,
        color: "#2d2d32",
        lineHeight: 24
    },
    addIssues_wrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    addIssues_text: {
        fontSize: 16,
        fontWeight: "700",
        color: "#14bef0"
    },
    addIssues_icon: {
        fontSize: 18,
        fontWeight: "700",
        color: "#14bef0",
        paddingLeft: 10,
        margin: 0
    }
})

export default PatientIssues;
