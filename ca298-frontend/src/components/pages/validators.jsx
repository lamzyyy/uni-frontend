

    export function ValidateDegreeForm(setErrors, formData) {
    const { full_name, shortcode } = formData;
    const err = [];
    const alphaRegex = /^[A-Za-z]+$/;

    // Check if both full_name and shortcode are strings
    if (!alphaRegex.test(full_name)) {
        err.push('Full name must contain only alphabetical characters.');
    }
    if (!alphaRegex.test(shortcode)) {
        err.push('Shortcode must contain only alphabetical characters.');

    }

    if (full_name.length < 2) {
        err.push('Full name must be at least 2 characters long.');
    }
    if (shortcode.length > 5 && shortcode.length < 2) {
        err.push('shortcode must be at most 5 characters long.');
    }

    // Check if full_name is at least 2 characters long
    // Return array of errors (empty if no errors)
    setErrors(err);
    return err.length === 0
}
export const ValidateCohortForm = (setError, formData) => {
    const errors = [];
  
    // Check if any required fields are empty
    if (!formData.id.trim()) {
      errors.push("Cohort ID is required");
    }
    if (!formData.year.trim()) {
      errors.push("Year is required");
    }
    if (!formData.degree.trim()) {
      errors.push("Degree URL is required");
    }
    if (!formData.name.trim()) {
      errors.push("Cohort Name is required");
    }
    setError(errors);  
    
    if (errors.length === 0) {
        formData.degree = `${process.env.REACT_APP_API_URL}/degree/${formData.degree}/`;
    }
    return errors.length === 0;
};

export const ValidateModuleForm = (setError, formData) => {
    const errors = [];
  
    // Check if any required fields are empty
   
    if (!formData.full_name.trim()) {
      errors.push("Cohort Name is required");
    }
    if (!formData.delivered_to.trim()) {
        errors.push("delivered to field is required");
      }
    //etc
    setError(errors);  
    if (errors.length === 0){
        formData.delivered_to = formData.delivered_to.split(', ')
        try {
        for (let index = 0; index < formData.delivered_to.length; index++) {
            let link = `${process.env.REACT_APP_API_URL}/cohort/${formData.delivered_to[index].toUpperCase()}/`;
            formData.delivered_to[index] = link
        }
        } catch (error) {
            errors.push(error)    
        }
    }
    return errors.length === 0;
};
export const ValidateStudentForm = (setError, formData) => {
    const errors = [];
  
    // Check if any required fields are empty
   
    if (!formData.student_id.trim()) {
      errors.push("Cohort Name is required");
    }
    //etc
    setError(errors)
    if (errors.length === 0){
        formData.cohort = `${process.env.REACT_APP_API_URL}/cohort/${formData.cohort.toUpperCase()}/`;
    }
    return errors.length === 0;
};  

export const ValidateGradesForm = (setError, formData) => {
    const errors = [];
  
    // Check if any required fields are empty
   
    if (!formData.cohort.trim()) {
      errors.push("Cohort Name is required");
    }
    //etc
    setError(errors)
    if (errors.length === 0){
        formData.cohort = `${process.env.REACT_APP_API_URL}/cohort/${formData.cohort.toUpperCase()}/`;
        formData.module = `${process.env.REACT_APP_API_URL}/module/${formData.module.toUpperCase()}/`;
        formData.student = `${process.env.REACT_APP_API_URL}/student/${formData.student}/`;
    }
    return errors.length === 0;
};  