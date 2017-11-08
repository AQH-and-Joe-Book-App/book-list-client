'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {

    $('.container').hide();
    $('.book-view').show();
    $('.book-count').text(app.Book.all.length + ' books available');
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  module.bookView = bookView;
})(app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})
