'use strict';

var app = app || {};

(function(module) {
$('.icon-menu').on('click', function(event){
  $('.nav-menu').slideToggle(350);
})

function resetView(){
  $('.container').hide();
  $('.nav-menu').slideUp(350);
}

const bookView = {};

bookView.initIndexPage = function(ctx) {
    resetView();
    $('.book-view').show();
    $('#book-list').empty();
    // $('.book-count').text(app.Book.all.length + ' books available');
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

    bookView.initDetailPage = function(ctx) {
      resetView();
      $('.detail-view').show();
      $('.book-detail').empty();
      let template = Handlebars.compile($('#book-detail-template').text());
      $('.book-detail').append(template(ctx));
    }

    bookView.initCreateFormPage = function() {
      console.log('initcreateformpage');
      resetView();
      $('.create-view').show();
      $('#create-form').on('submit', function(event){
        event.preventDefault();

        let book = {
          title: event.target.title.value,
          author: event.target.author.value,
          isbn: event.target.isbn.value,
          image_url: event.target.image_url.value,
          description: event.target.description.value,

        };
        console.log(book);
          module.Book.create(book);
      })

    }


    bookView.initUpdateFormPage = function() {
      console.log('initUpdateFormPage');
      let idfromurl = window.location.pathname.replace("/books/", "").replace('/update','');
      resetView();
      $('.update-view').show();
      $('#update-form').on('submit', function(event){
        event.preventDefault();

        let book = {
          book_id: idfromurl,
          title: event.target.title.value,
          author: event.target.author.value,
          isbn: event.target.isbn.value,
          image_url: event.target.image_url.value,
          description: event.target.description.value,

        };
          console.log(book);
          module.Book.update(book);
      })

    }


module.bookView = bookView;
})(app)

// $(function() {
//   app.Book.fetchAll(app.bookView.initIndexPage);
// })
