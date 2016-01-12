import {Component} from 'angular2/core';

@Component({
    selector: 'library',
    templateUrl: '/views/library/library.html'
})

export class Library {
    constructor() {
        this.books = [{
            name: 'book 1'
        }, {
            name: 'book 2'
        }];
    }
}
