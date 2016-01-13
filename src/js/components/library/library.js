import {Component} from 'angular2/core';

import {BooksService} from '../../services/books';

@Component({
    selector: 'library',
    templateUrl: '/views/library/library.html',
    viewProviders: [BooksService]
})

export class Library {
    constructor(Books: BooksService) {
        this.books = Books.getBooks();
    }
}
