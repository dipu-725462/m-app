export const recommendDoctor = {
    heading: 'Would you like to recommend doctor ?',
    options: [
        {
            key: 'true',
            text: 'Yes',
        },
        {
            key: 'false',
            text: 'NO',
        }
    ]
}

export const waitTime = {
    heading : 'How long did you wait to be seen by doctor ?',
    options : [
        {   
            key : 10,
            text : 'Less than 15 min'
        },
        {   
            key : 15,
            text : '15 min to 30 min'
        },
        {   
            key : 30,
            text : '30 min to 1 hour'
        },
        {   
            key : 1,
            text : 'More than 1 hour'
        }
    ]
}

export const doctorFriendliness = {
    heading : 'What were you most happy with ?',
} 

export const userFeedback = {
    heading: 'Tell us about your experience with the doctor.',
    tip: "Tip: eg. Share relevant stories which made you appreciate 'doctor friendliness'. Read more tips",
    text: 'Add your experience'
}

export const feedbackInfo = {
    text: 'Note: All feedback go under strict moderation process before publishing to check abusive language, threats, superlative comments on medical abilities and so on.'
}

export const userConsent = {
    text: 'Keep this feedback publicly anonymous',
    note: 'Note: Your identity will be shared with doctor, if doctor asks for it.'
}
