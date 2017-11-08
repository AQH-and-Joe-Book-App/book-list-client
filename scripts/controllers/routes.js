'use strict';


page('/', app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/:book_id', app.Book.fetchOne(app.detailView.initDetailView));
page('/books/new', formView.init);


page();
