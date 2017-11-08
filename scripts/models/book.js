'use strict';

var app = app || {};
var __API_URL__ = 'https://aqh-jw-booklist.herokuapp.com';

(function(module) {
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-template').text());
    return template(this);
  }

  Book.all = [];
  Book.one = [];


  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
  }

  Book.loadOne = row => {
     Book.one = row.map(book => new Book(book));
   }


  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);



  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);


  Book.fetchOne = (callback,id)  =>
    $.get(`${__API_URL__}/api/v1/books/:id`)
      .then(Book.loadOne)
      .then(callback)
      .catch(errorCallback);



  module.Book = Book;


  $(function() {

   $('button').on('click', Book



   })
  })



})(app)
