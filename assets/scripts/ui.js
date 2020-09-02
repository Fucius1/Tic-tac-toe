'use strict'


const store = require('./store')

const onSignUpSuccess = function (response) {
    console.log('response is ', response)
    $('#message').text('Thanks for signing up '+ response.user.email)
    $('sign-up-form').trigger("reset")
    
}

const onSignUpFailure = function(error){
    console.log('error is ', error)
    $('#message').text('Sign up failed, try again')
}


//--------------------------------------------------------------------------


    const onSignInSuccess = function (response) {
        console.log('response is ', response.user)

        store.user =response.user

        $('#message').text('Thanks for signing in '+ response.user.email)
        $('#sign-in-form').trigger("reset")
        $('#password-form').show()
        $('#sign-in-form').hide()
        $('#sign-up-form').hide()
        $('#sign-out').show()
    }
    
    const onSignInFailure = function(error){
        console.log('error is ', error)
        $('#message').text('Sign in failed, try again')
    }
 //-----------------------------------------------------------------------------------       

 const onChangePasswordSuccess = function (response) {
    console.log('response is ', response.user)

    store.user =response.user

    $('#message').text('Password has been changed! '+ response.user.password)
    $('change-password').trigger("reset")
    
}

const onChangePasswordFailure = function(error){
    console.log('error is ', error)
    $('#message').text('Password change failed, try again')
}
//----------------------------------------------------------------------------------------

const onSignOutSuccess = function (response) {
    console.log('response is ', response.user)

    store.user = response.user

    $('#message').text('You are now signed out! '+ response.user.email)
    $('change-password').trigger("reset")
    $('#play-game').hide()
    $('#sign-up-form').show()
    $('#sign-in-form').show()
    $('#password-form').show()


}

const onSignOutFailure = function(error){
    console.log('error is ', error)
    $('#message').text('You are not signed out!Try again')
}


    //-------------------------------------------------------------------------------------

    const onNewGameSuccess = function (response) {
        console.log('response is ', response.user)
        
        store.game = response.game
        store.currentPlayer = 'x'
    
        $('#message').text('You have now started a new game! '+ response.user.email)
        $('change-password').trigger("reset")
        $('#play-game').show()
        $('#sign-up-form').hide()
        $('#sign-in-form').hide()
        $('#password-form').show()

        $('.game-board').trigger("reset")
    
    
    }
    
    const onNewGameFailure = function(error){
        console.log('error is ', error)
        $('#message').text('The game has not restarted! Try again')
    }




module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure,
    onNewGameSuccess,
    onNewGameFailure
} 
