import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, CheckBox, Radio, View , SafeAreaView } from 'react-native';
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
            <ScrollView>
                <RecommendDoctor />
                <PatientIssues />
                <WaitTime />
                <DoctorFrinedliness />
                <UserFeedback />
                <FeedbackInfo />
                <UserConsent />
            </ScrollView>
        )
    }
}

export default Feedback;