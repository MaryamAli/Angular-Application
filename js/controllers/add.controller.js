let AddController = function ($scope, BookService) {

  $scope.addBook = (obj) => {

    BookService.addBook(obj).then( (res) => {
      $scope.book = {};
    });
  };
};

AddController.$inject = ['$scope', 'BookService'];

export default AddController;