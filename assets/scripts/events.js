'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event){
    event.preventDefault()
    
    //get the stuff from the form
    // get the form from the event
    const form = event.target
    // use get form fields to get data from the form
    const data = getFormFields(form)



    // send that with request to the api
    api.signUp(data)
    // handle successful response 
        .then(ui.onSignUpSuccess)
    //handle failed response
        .catch(ui.onSignUpFailure)
}



const onSignIn = function (event){
    event.preventDefault()
    
    //get the stuff from the form
    // get the form from the event
    const form = event.target
    // use get form fields to get data from the form
    const data = getFormFields(form)

    

    // send that with request to the api
    api.signIn(data)
    // handle successful response 
        .then(ui.onSignInSuccess)
    //handle failed response
        .catch(ui.onSignInFailure)
}

const onChangePassword = function (event){
    event.preventDefault()
    
    //get the stuff from the form
    // get the form from the event
    const form = event.target
    // use get form fields to get data from the form
    const data = getFormFields(form)

    

    // send that with request to the api
    api.signIn(data)
    // handle successful response 
        .then(ui.onChangePasswordSuccess)
    //handle failed response
        .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event){
    event.preventDefault()
    
    //get the stuff from the form
    // get the form from the event
    const form = event.target
    // use get form fields to get data from the form
    const data = getFormFields(form)

    

    // send that with request to the api
    api.signIn(data)
    // handle successful response 
        .then(ui.onSignOutSuccess)
    //handle failed response
        .catch(ui.onSignOutFailure)
}


module.exports = {
    onSignUp: onSignUp,
    onSignIn: onSignIn,
    onChangePassword: onChangePassword,
    onSignOut: onSignOut
}
