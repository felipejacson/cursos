var app = angular.module('cursosApp', ['ui.router']);

app.constant('urls', {
    USUARIO_API_SERVICE : 'http://localhost:8080/api/usuarios/',
    CURSO_API_SERVICE : 'http://localhost:8080/api/cursos/'
});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/usuarios');
    $stateProvider
        .state('usuarios', {
            name: 'usuarios',
            url: '/usuarios',
            templateUrl: 'p/usuarios',
            controller:'UsuariosController',
            controllerAs:'ctrl'
        })
        .state('cursos', {
            name: 'cursos',
            url: '/cursos',
            templateUrl: 'p/cursos',
            controller:'CursosController',
            controllerAs:'cur'
        })
        .state('usuarios-curso', {
            name: 'uusuarios-curso',
            url: '/usuarios-curso?cursoId',
            templateUrl: 'p/usuarios-curso',
            controller:'UsuariosCursoController',
            controllerAs:'usu'
        });
}]);