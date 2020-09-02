'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

let turn = true 
let plays = []

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


const onPlayGame = function (event){
    event.preventDefault()
    
    //get the stuff from the form
    // get the form from the event
    const form = event.target
    // use get form fields to get data from the form
    const data = getFormFields(form)

    

    // send that with request to the api
    api.signIn(data)
    // handle successful response 
        .then(ui.onPlayGameSuccess)
    //handle failed response
        .catch(ui.onPlayGameFailure)
}
//-------------------------------------------------------------------
const onNewGame = function (event){
    event.preventDefault()

    const form = event.target

    const data = getFormFields(form)

    // send that with request to the api
    api.signIn(data)
    // handle successful response 
        .then(ui.onNewGameSuccess)
    //handle failed response
        .catch(ui.onNewGameFailure)
    
}
//----------------------------------------------


const checkWin = ()=> {
     
          const boxes = $('.board')
      if (boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText && boxes[2].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText && boxes[5].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText && boxes[8].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText && boxes[8].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText && boxes[6].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText && boxes[6].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText && boxes[7].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
      else if (boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText && boxes[8].innerText !== ""){
        store.winner = boxes[1].innerText
        return true 
      }
    
      else{   
      
            
         if(plays.length === 9){
            store.winner = 'tie'
            return true
            } 
        return false
      
      }
    }

const onBoardClick = (event) =>{
    const player = turn ? "x" : "o"

   
    if(event.target.innerText === ""){
        event.target.innerText = player
        plays.push(player)
        console.log(plays)
           if(checkWin()) {
                console.log('game over')
                $('#winner').text(store.winner)
                return
            }
        return turn = !turn 
    }
    if(checkWin()) {
        console.log('game over')
        $('#winner').text(store.winner)
        return
    }

}


module.exports = {
    onSignUp: onSignUp,
    onSignIn: onSignIn,
    onChangePassword: onChangePassword,
    onSignOut: onSignOut,
    onNewGame: onNewGame,
    onBoardClick
}
