import React, { Component } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
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
        const {navigation} = this.props;
        return (
            <SafeAreaView>
                {/* <KeyboardAvoidingView behavior="padding"> */}
                    <ScrollView style={styles.feedback_wrapper}>
                        <RecommendDoctor doctorName = {"Dr. Anup Jain"} />
                        <PatientIssues {...this.props} />
                        <WaitTime />
                        <DoctorFrinedliness />
                        <UserFeedback />
                        <FeedbackInfo />
                        <UserConsent />
                    </ScrollView>
                {/* </KeyboardAvoidingView> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    feedback_wrapper: {
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor : "white"
    }
})

export default Feedback;
