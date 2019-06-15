var app = angular.module('clienteModule', []);
app.controller('clienteControl', function($scope) {

    $scope.clientes = [{'codigo':'123456789012-1', 
    'nome':'Testes dos Santos', 
    'cargo':'Uberlandia-centro', 
    'endereco':'Redes ',
    'cidade':'10:30', 
    'cep':'problemas pessoais'}]

    $scope.salvar = function() {
        $scope.clientes.push($scope.cliente);
        $scope.novo();
    }

    $scope.pesquisar = function() {

    }

    $scope.excluir = function() {
        $scope.clientes.splice($scope.clientes.indexOf($scope.cliente), 1);
        $scope.novo();
    }

    $scope.novo = function() {
        $scope.cliente = {};
    }

    $scope.seleciona = function(cliente) {
        $scope.cliente = cliente;
    }
});