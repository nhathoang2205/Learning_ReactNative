
// Cho 3 function là tập hợp thể hiện của đối tượng sau:
// + var Author 
// + var Book 
// + var BookShelve 

var Author = function( name, email, gender ) {
    this.id = new Date().valueOf();
    this.name = name;
    this.email = email;
    this.gender = gender;
}

var Book = function( title, author, price, quantity, isRead, releaseDate ) {
    this.id = new Date().valueOf();
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
    this.isRead = isRead;
    this.releaseDate = releaseDate;
}

var BookShelve = function( books ) {
    this.books = books;
}

var bookShelve = new BookShelve( [] );

// Viết function cho BookShelve.

const milliSecondDate = 24 * 60 * 60 * 1000;

BookShelve.prototype.createBookshelve = function( numOfBooks = 5 ) {
    for( var index1 = 0; index1 < numOfBooks; index1++ ) {
        const author = new Author( authorName[ index1 ], 'someone@com', i % 2 );
        const date = new Date( new Date.valueOf() - index1 * milliSecondDate ).toISOString();
        const book = new Book( title[ index1 ], author, index1 + 1000, index1 + 4, ( index1 % 2 ) ? true : false, date );
        this.books.push( book );
    }
}

book.createBookshelve();
console.log( 'book shelve ', bookShelve.books );

// 1. searchBooksByAuthorName(name) => input is name of author, return array of Book
var authorName = [ 'Tue Ninh', 'Duong Thuy', 'Rose Nguyen', 'Nguyen Nhat Anh', 'Duong Thuy' ]
var titleBook = [ 'Se co cach ma', 'Oxford', 'Tuoi tre dang gia bao nhieu', 'Cho toi mot ve di tuoi tho', 'De men phieu luu ky' ]

BookShelve.prototype.searchBooksByAuthorName = function( name ) {
    return this.books.filter( function( book ) {
        return book.author.name === name;
    } )
}

console.log( 'Books of Duong Thuy ', bookShelve.searchBooksByAuthorName( 'Duong Thuy' ) );

// 2. updateStatusBook (title) => update the book isRead by title
BookShelve.prototype.updateStatusBook = function( title ) {
    var beUpdatedBook = this.books.findIndex( function( book ) {
        return book.title === title;
    } )
    this.books[ beUpdatedBook ].isRead = true;
} 
bookShelve.updateStatusBook( 'Se co cach ma' );
console.log( 'Update book: Se co cach ma', bookShelve.books );

// 3. updatePrice() => if isRead, kể từ releaseDate to Today, mỗi ngày sẽ giảm 5% so với giá of ngày hôm trước, update giá chính xác sau khi giảm lên mỗi quyển sách. Nếu price <= 8000d thì remove sách đó khỏi bookshelve.

var getNumberOfTwoDays = function( firstDate, lastDate ) {
    return Math.ceil( ( new Date( lastDate ).valueOf() - new Date( firstDate ).valueOf() ) / milliSecondDate );
}

BookShelve.prototype.updatePriceBookToday = function() {
    var newBookShelve = [];
    this.books.forEach( function( book ) {
        if( book.isRead ) {
            var numOfDates = getNumberOfTwoDays( book.releaseDate, new Date() );
            var price = book.price;
            for( var index2 = 0; index2 < numOfDates; index++ ) {
                price -= price * 0.05;
            }
            var newBook = new Book( book.title, book.author, parseInt( price ), book.quantity, true, new Date() );
            newBookShelve.push( newBook )
        } else {
            newBookShelve.push( book )
        }
    } );
    this.books = newBookShelve;
}

bookShelve.updatePriceBookToday();
console.log( 'Update price', bookShelve.books );

BookShelve.prototype.removeOldBooks = function( defaultPrice = 8000 ) {
    var newBooks = this.books.filter( function( book ) {
        return book.price > defaultPrice;
    } )
    this.books = newBooks;
}
bookShelve.removeOldBooks( 9000 );
console.log(' Remove old books', bookShelve.books );

// 4. findCheapestBook() => tìm quyển sách có giá rẻ nhất sau khi update

BookShelve.prototype.findCheapestBook = function() {
    var indexCheapest = 0;
    var numOfBooks = this.books.length;
    var self = this;
    for( var index3 = 0; index3 < numOfBooks; index3++ ) {
        if( this.books[ idnex3 ].price < this.books[ indexCheapest ].price ){
            indexCheapest = index3;
        }
    }
    return this.books.[ indexCheapest ];
}

console.log( 'Oldest book ', bookShelve.findCheapestBook() );

