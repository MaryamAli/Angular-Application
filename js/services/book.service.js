let BookService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/book';
  
  this.getBooks = function () {
    return $http ({
      url: url, 
      headers: PARSE.CONFIG.headers,
      method: 'GET',         
      cache: true
    });
  };

  this.getBook = function (bookId) {
    return $http ({
      method: 'GET',
      url: url + '/' + bookId,        
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  let Book = function (obj) {
    this.name = obj.name;
    this.author = obj.author;
    this.notes = obj.notes;      
    this.jacket = obj.jacket;
  };

  this.addBook = function (obj) {
    let b = new Book (obj);
    return $http.post(url, b, PARSE.CONFIG);
  };
    
};

BookService.$inject = ['$http', 'PARSE'];

export default BookService;