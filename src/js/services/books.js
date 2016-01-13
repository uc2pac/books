export class BooksService {
  	constructor() {
	    this.books = [
	      	{ 
	      		name: 'Christoph Burgdorf',
	      		author: 'author',
	      		publisher: 'publisher',
	      		releaseDate: 'releaseDate',
	      		imageName: 'imageName'
	      	}, { 
	      		name: 'Pascal Precht',
	      		author: 'author',
	      		publisher: 'publisher',
	      		releaseDate: 'releaseDate',
	      		imageName: 'imageName'
	      	}, { 
	      		name: 'thoughtram',
	      		author: 'author',
	      		publisher: 'publisher',
	      		releaseDate: 'releaseDate',
	      		imageName: 'imageName'
	      	}
	    ];
  	}

  	getBooks() {
    	return this.books;
  	}
}