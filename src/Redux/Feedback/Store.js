export const initialState = {
   doctor_name : null,
   campaign_id : '',
   survey_id : '',
   answers : {
      is_recommended : null,
      patient_issues : [],
      wait_time : [],
      doctor_list : [],
      review : "",
      is_anonymous : false,
   },
   questions : {},
   is_abusive: false,
   abuses : [],
   form_submit_initiated : false,
   form_submitted : false,
   review_exist : null,
}
