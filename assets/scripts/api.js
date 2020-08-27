'use strict'



const config = require('./../config')
const signUp = function (data){
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })

}



const signIn = function (data){
    return $.ajax({
        url: config.apiUrl + '/sign-In',
        method: 'POST',
        data: data
    })

}

const changePassword = function (data) {
    return $.ajax({
      url: config.apiUrl + '/change-password',
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: data
    })
  }

//--------------------------------------------------------------
const SignOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const playGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/play-game',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}


module.exports = {

}
