let SingleController = function ($scope, $stateParams, BookService) {
  
  BookService.getBook($stateParams.bookId).then( (res) => {
    $scope.singleBook = res.data;
  });
};

SingleController.$inject = ['$scope', '$stateParams', 'BookService'];

export default SingleController;