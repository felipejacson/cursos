angular.module('cursosApp').controller('UsuariosCursoController', ['$scope','$routeParams', function($scope, $routeParams, usuarioService, cursoService) {
    var self = this;
    var cursoId = $routeParams.cursoId;
    console.log("CURSO: " + cursoId);
    self.curso = {};
    self.listaUsuarios = [];

    function getTodosUsuarios() {
        usuarioService.getTodosUsuarios().then(
            function (listaUsuarios) {
                self.listaUsuarios = listaUsuarios;
                console.log(self.listaUsuarios);
            },
            function (errResponse) {
                console.error('Erro ao listar os usuários: ' + errResponse.data);
            }
        );
    }

    function getCurso(id) {
        cursoService.getCurso(id).then(
            function (curso) {
                self.curso = curso;
            },
            function (errResponse) {
                console.error('Erro ao buscar curso ' + id, ' - ' + errResponse.data);
            }
        );
    };

    getCurso(cursoId);
    getTodosUsuarios();
}]);