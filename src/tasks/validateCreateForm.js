export const validateForm = (values) => {
    let error = {};
    if(values.title.trim() === "") {
        error.title = "Title required!"
    }
    if(values.description.trim() === "") {
        error.description = "Description required!"
    }
    if(values.status.trim() === "") {
        error.status = "Status required!"
    }
    return error;

}