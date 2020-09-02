'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events')
const store = require('./store')

///auth
//const authEvents = require('')



$(() => {
  // your JS code goes here

  $('#play-game').hide()
  $('#sign-out').hide() 

  $('#password-form').hide()
  
 $('#sign-up-form').on('submit', authEvents.onSignUp)

 $('#sign-in-form').on('submit', authEvents.onSignIn)

 $('#password-form').on('submit', authEvents.onChangePassword)

 
 $('#sign-out').on('submit', authEvents.onSignOut)
 $('#play-game').on('submit', authEvents.onPlayGame)


 $('#newgame').on('click', authEvents.onNewGame)


 //event handler funciton recieves event as an argument
$('.board').on('click', authEvents.onBoardClick) 
})
