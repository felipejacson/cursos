'use strict';
angular.module('cursosApp').factory('usuarioService', ['$http', '$q', 'urls', function ($http, $q, urls) {
    var factory = {
        getTodosUsuarios: getTodosUsuarios,
        getUsuario: getUsuario,
        atualizarUsuario: atualizarUsuario,
        inserirUsuario: inserirUsuario,
        removerUsuario: removerUsuario
    };

    return factory;

    function getTodosUsuarios() {
        console.log('Buscando todos os usuários');
        var deferred = $q.defer();
        $http.get(urls.USUARIO_API_SERVICE)
            .then(
                function (response) {
                    console.log('Usuários encontrados');
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao buscar todos os usuários');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getUsuario(id) {
        console.log('Buscando o usuário : ' + id);
        var deferred = $q.defer();
        $http.get(urls.USUARIO_API_SERVICE + id)
            .then(
                function (response) {
                    console.log('Usuário encontrado : ' + id);
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao buscar o usuário: ' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function atualizarUsuario(usuario, id) {
        console.log('Iniciando a atualização do usuário : ' + id + " - " + usuario);
        var deferred = $q.defer();
        $http.put(urls.USUARIO_API_SERVICE + id, usuario)
            .then(
                function (response) {
                    getTodosUsuarios();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao atualizar o usuário: :' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function inserirUsuario(usuario) {
        console.log('Iniciando inclusão do usuário');
        console.log(usuario);
        var deferred = $q.defer();
        $http.post(urls.USUARIO_API_SERVICE, usuario)
            .then(
                function (response) {
                    getTodosUsuarios();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao incluir o usuário: '+errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function removerUsuario(id) {
        console.log('Removendo o usuário: ' + id);
        var deferred = $q.defer();
        $http.delete(urls.USUARIO_API_SERVICE + id)
            .then(
                function (response) {
                    getTodosUsuarios();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Erro ao remover o usuário: ' + id);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

}]);