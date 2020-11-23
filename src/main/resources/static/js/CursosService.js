'use strict';
angular.module('cursosApp').factory('cursoService', ['$http', '$q', 'urls', function ($http, $q, urls) {
    var factory = {
        getTodosCursos: getTodosCursos,
        getCurso: getCurso,
        atualizarCurso: atualizarCurso,
        inserirCurso: inserirCurso,
        removerCurso: removerCurso
    };

    return factory;

    function getTodosCursos() {
        console.log('Buscando todos os cursos');
        var deferred = $q.defer();
        $http.get(urls.CURSO_API_SERVICE)
            .then(
                function (response) {
                    console.log('Cursos encontrados');
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao buscar todos os cursos');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getCurso(id) {
        console.log('Buscando o curso : ' + id);
        var deferred = $q.defer();
        $http.get(urls.CURSO_API_SERVICE + id)
            .then(
                function (response) {
                    console.log('Curso encontrado : ' + id);
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao buscar o curso: ' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function atualizarCurso(curso, id) {
        console.log('Iniciando a atualização do curso : ' + id + " - " + curso);
        var deferred = $q.defer();
        $http.put(urls.CURSO_API_SERVICE + id, curso)
            .then(
                function (response) {
                    getTodosCursos();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao atualizar o curso: :' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function inserirCurso(curso) {
        console.log('Iniciando inclusão do curso');
        console.log(curso);
        var deferred = $q.defer();
        $http.post(urls.CURSO_API_SERVICE, curso)
            .then(
                function (response) {
                    getTodosCursos();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao incluir o curso: '+errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function removerCurso(id) {
        console.log('Removendo o curso: ' + id);
        var deferred = $q.defer();
        $http.delete(urls.CURSO_API_SERVICE + id)
            .then(
                function (response) {
                    getTodosCursos();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao remover o curso: ' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

}]);