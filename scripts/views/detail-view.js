'use strict';

var app = app || {};

(function(module) {
  const detailView = {};

  detailView.initDetailView = function() {

    $('.container').hide();
    $('.book-view').show();
    $('.book-count').text(app.Book.one.length + ' books available');
    app.Book.one.map(book => $('#book-list').append(book.toHtml()));
  }

  module.detailView = detailView;
})(app)
