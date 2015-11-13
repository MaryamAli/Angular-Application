let SingleController = function ($scope, $stateParams, BookService, $state) {
  
  BookService.getBook($stateParams.bookId).then( (res) => {
    $scope.singleBook = res.data;
  });
  $scope.deleteMe = function (obj) {
    BookService.delete(obj).then( (res) => {
      $state.go('root.list');
    });
  };
};

SingleController.$inject = ['$scope', '$stateParams', 'BookService', '$state'];

export default SingleController;