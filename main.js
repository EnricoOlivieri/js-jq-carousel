
//Inserimento document per inizzializzare il DOM
$(document).ready(function(){

  $('.next').click(function(){
    var activeImg = $('img.active, .nav > i.active')
    activeImg.removeClass('active')
    if ((activeImg).hasClass('last')){
      $('.first').addClass('active')
    } else {
      activeImg.next().addClass('active')
    }
  })

  $('.prev').click(function(){
    var activeImg = $('img.active, .nav > i.active')
    activeImg.removeClass('active')
    if ((activeImg).hasClass('first')){
      $('.last').addClass('active')
    } else {
      activeImg.prev().addClass('active')
    }
  })


})
