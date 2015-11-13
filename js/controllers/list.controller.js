let ListController = function ($scope, BookService) {
  
  BookService.getBooks().then ( (res) => {
    $scope.books = res.data.results;
  });
};  

ListController.$inject = ['$scope', 'BookService'];

export default ListController;