let ListController = function ($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/book';

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.books = res.data.results;
  });
};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;