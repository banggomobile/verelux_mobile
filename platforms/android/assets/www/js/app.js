angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: "/login",
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    
    .state('inicio', {
      url: "/inicio",
      templateUrl: 'templates/inicio.html',
      controller: 'InicioCtrl'
    })
    
    .state('novoOrcamento', {
      url: "/novoOrcamento",
      templateUrl: 'templates/novoOrcamento.html',
      controller: 'NovoOrcamentoCtrl'
    })

    .state('selecionarPerfil', {
      url: "/selecionarPerfil",
      templateUrl: 'templates/selecionarPerfil.html',
      controller: 'SelecionarPerfilCtrl'
    })

    .state('selecionarVidro', {
      url: "/selecionarVidro",
      templateUrl: 'templates/selecionarVidro.html',
      controller: 'SelecionarVidroCtrl'
    })

    .state('dados', {
      url: "/dados",
      templateUrl: 'templates/dados.html',
      controller: 'DadosCtrl'
    })

    .state('resumoPedido', {
      url: "/resumoPedido",
      templateUrl: 'templates/resumoPedido.html',
      controller: 'resumoPedidoCtrl'
    })

    .state('listaOrcamentos', {
      url: "/listaOrcamentos",
      templateUrl: 'templates/listaOrcamentos.html',
      controller: 'listaOrcamentosCtrl'
    })

    .state('detOrcamento', {
      url: "/detOrcamento",
      templateUrl: 'templates/detOrcamento.html',
      controller: 'detOrcamentoCtrl'
    })

  $urlRouterProvider.otherwise('/login');

});

