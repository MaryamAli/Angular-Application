let  EditController = function($scope, $stateParams, BookService, $state) {
  BookService.getBook($stateParams.bookId).then( (res) => {
    $scope.singleBook = res.data;
  });

  $scope.updateBook = function (obj) {
    BookService.update(obj).then( (res) => {
      $state.go('root.list');
    });
  };
};

EditController.$inject = ['$scope', '$stateParams', 'BookService', '$state'];
export default EditController;