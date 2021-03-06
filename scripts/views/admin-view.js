'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function(module) {

  function resetView(){
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }


const adminView = {};


adminView.initAdminPage = function(ctx, next){
  resetView();
  $('.admin-view').show();
  $('#admin-form').on('submit', function(event){
    event.preventDefault();
    let token = event.target.passphrase.value;
    if(token === localStorage.token){
      let currentBook = ctx.params.book_id;
      next();
    }else{
      page('/');
    }
  })
}


adminView.verify = function(ctx, next){
if(!localStorage.token){
}else{
next();

}
}

module.adminView = adminView;
})(app)
