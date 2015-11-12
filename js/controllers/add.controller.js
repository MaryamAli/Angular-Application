let AddController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/book';
  let Book = function (obj) {
    this.name = obj.name;
    this.author = obj.author;
    this.notes = obj.notes;
  };

  $scope.addBook = (obj) => {
    let b = new Book (obj);

    $http.post(url, b, PARSE.CONFIG).then( (res) => {
      $scope.book = {};
    });
  };
};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;