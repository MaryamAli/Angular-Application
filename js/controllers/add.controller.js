let AddController = function ($scope, BookService, $state) {

  $scope.addBook = (obj) => {

    BookService.addBook(obj).then( (res) => {
      $scope.book = {};
      $state.go('root.list');
    });
  };
};

AddController.$inject = ['$scope', 'BookService', '$state'];

export default AddController;