import { TYPES } from "./Constants"

export const updateDoctorRecommendation = (data) => {
    return {
        type :TYPES.UPDATE_RECOMMENDATION ,
        payload : data
    }
}

export const updatePatientIssues = (data) => {
    return {
        type : TYPES.UPDATE_PATIENT_ISSUES,
        payload : data
    }
}

export const updateDoctorWaitTime = (data) => {
    return {
        type: TYPES.UPDATE_WAIT_TIME,
        payload : data
    }
}

export const updateDoctorList = (data) => {
    return {
        type : TYPES.UPDATE_DOCTOR_LIST,
        payload : data
    }
}

export const updateUserReview = (data) => {
    return {
        type: TYPES.UPDATE_USER_REVIEW,
        payload : data
    }
}

export const updateAnonymousStatus = (data) => {
    return {
        type : TYPES.UPDATE_ANONYMOUS_STATUS,
        payload : data
    }
}

export const formSubmitted = (data) => {
    return {
        type : TYPES.UPDATE_FORM_SUBMITTED,
        payload : data
    }
}

export const fromSubmissionInitiated = (data) => {
    return {
        type : TYPES.UPDATE_FORM_SUBMISSION_INITIATED,
        payload : data
    }
}

export const checkForReview = () => {
    // make api call and update the store.
    console.log("Check if review exists is called")
    return;
}

export const getAbusiveContent = () => {
    // make api call and update >>>>> abuses [] <<<<< in the store
    console.log("get abusive content is called");
    return;
}

export const updateDecencyCheck = (data) => {
    return {
        type : TYPES.UPDATE_DECENCY_CHECK,
        payload : data
    }
}
