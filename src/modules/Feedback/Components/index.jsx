import React, { Component } from 'react';
import {ScrollView, SafeAreaView, StyleSheet, Platform } from 'react-native';
import WaitTime from './WaitTime';
import RecommendDoctor from './RecommendDoctor';
import PatientIssues from './PatientIssues';
import UserConsent from './UserConsent';
import UserFeedback from './UserFeedback';
import DoctorFrinedliness from './DoctorFrinedliness';
import FeedbackInfo from './FeedbackInfo';

class Feedback extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView style={styles.feedback_wrapper}>
                    <RecommendDoctor />
                    <PatientIssues />
                    <WaitTime />
                    <DoctorFrinedliness />
                    <UserFeedback />
                    <FeedbackInfo />
                    <UserConsent />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    feedback_wrapper : {
        marginTop : Platform.OS === 'android' ? 25: 0
    }
})

export default Feedback;