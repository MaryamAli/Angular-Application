let BookService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/book';
  
  this.getBooks = function () {
    return $http ({
      url: url, 
      headers: PARSE.CONFIG.headers,
      method: 'GET',         
      // cache: true
    });
  };

  this.getBook = function (bookId) {
    return $http ({
      method: 'GET',
      url: url + '/' + bookId,        
      headers: PARSE.CONFIG.headers,
      // cache: true
    });
  };

  let Book = function (obj) {
    this.name = obj.name;
    this.author = obj.author;
    this.notes = obj.notes;      
    this.imageUrl = obj.imageUrl;
  };

  this.addBook = function (obj) {
    let b = new Book (obj);
    return $http.post(url, b, PARSE.CONFIG);
  };
  this.delete = function (obj) {
    return $http.delete(url +'/' +obj.objectId, PARSE.CONFIG);
  };
    
  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };
};

BookService.$inject = ['$http', 'PARSE'];

export default BookService;