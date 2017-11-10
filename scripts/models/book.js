'use strict';

var app = app || {};
// var __API_URL__ = 'https://aqh-jw-booklist.herokuapp.com';
var __API_URL__ = 'http://localhost:3000';

(function(module) {


  function errorCallback(err) {
    console.error(err);
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

  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
  }

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.fetchOne = (ctx, callback)  =>
      $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book = results[0])
      .then(callback)
      .catch(errorCallback);

Book.deleteOne = (ctx, callback)  =>
          $.ajax({
              url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`, // your api url
              method: 'DELETE', // method is any HTTP method
              success: function() {
                page('/');
                callback();
              }
          });


  // ask about this
  Book.update = (ctx, book) =>
      $.ajax({
          url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`, // your api url
          method: 'PUT', // method is any HTTP method
          data: book, // data as js object
          success: function() {
            page('/');
          }
      });


Book.create = (book, callback) => {
  $.post(`${__API_URL__}/api/v1/books`, book)
    .then(() => page('/'))
    .then(callback)
    .catch(errorCallback);
  }
  module.Book = Book;


})(app)
