let SingleController = function ($scope, $stateParams, $http, PARSE) {
  let url = PARSE.URL + 'classes/book/' + $stateParams.bookId;

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.singleBook = res.data;
  });
};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;