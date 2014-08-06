angular.module('starter.controllers', [])

.controller('PaneCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope) {
})

.controller('InicioCtrl', function($scope) {
})

.controller('NovoOrcamentoCtrl', function($scope) {
})

.controller('SelecionarPerfilCtrl', function($scope) {
    $scope.select = function(p){
        $scope.selected_perfil = p;
    }

  $scope.perfis = [
    {
    	title: '0371 - Perfil p/ Porta',
    	id: 1,
    	imageUrl: "img/0371.jpg"
    },
    {
    	title: '0410 - Perfil p/ Porta',
    	id: 2,
    	imageUrl: "img/0410.jpg"
    },
    {
    	title: '0623 - Perfil p/ Porta',
    	id: 3,
    	imageUrl: "img/0623.jpg"
    },
    {
    	title: '0720 - Perfil p/ Porta',
    	id: 4,
    	imageUrl: "img/0720.jpg"
    },
        {
        title: '1036 - Perfil p/ Porta',
        id: 5,
        imageUrl: "img/1036.jpg"
    }
  ];
})

.controller('SelecionarVidroCtrl', function($scope) {
    $scope.select = function(v){
        $scope.selected_vidro = v;
    }

  $scope.vidros = [
    {
        title: 'Vidro Antilope',
        id: 1,
        imageUrl: "img/antilope.jpg"
    },
    {
        title: 'Vidro Astral',
        id: 2,
        imageUrl: "img/astral.jpg"
    },
    {
        title: 'Vidro Pontilhado',
        id: 3,
        imageUrl: "img/pontilhado.jpg"
    },
    {
        title: 'Vidro Quadrato',
        id: 4,
        imageUrl: "img/quadrato.jpg"
    }
  ];
})

.controller('DadosCtrl', function($scope) {
    $scope.largura = '';
    $scope.altura = '';
    $scope.quantidade = '';
})

.controller('resumoPedidoCtrl', function($scope) {
  $scope.orcamentos = [
    {
        id: 1,
        Perfil: '0371 - Perfil p/ Porta',
        Acabamento: 'Vidro Antilope',
        Largura: '130',
        Altura: '215',
        Quantidade: '1',
        Valor: 'R$ 1.000,00'
    }
  ];
})

.controller('listaOrcamentosCtrl', function($scope) {
  $scope.pedidos = [
    {
        id: 1001,
        Cliente: 'João Pessoa',
        Data: '31/07/2014',
        Valor: 'R$ 1.000,00'
    }
  ];
})

.controller('detOrcamentoCtrl', function($scope) {
    $scope.detalhes = 
    {
        id: 1001,
        item: 01,
        Data: '31/07/2014',
        Cliente: 'João Pessoa',
        Perfil: '0371 - Perfil p/ Porta',
        Acabamento: 'Vidro Antilope',
        Largura: '130',
        Altura: '215',
        Quantidade: '1',
        Valor: 'R$ 1.000,00'
    };
})


