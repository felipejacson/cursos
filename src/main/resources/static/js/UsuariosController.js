angular.module('cursosApp').controller('UsuariosController', function ($scope, usuarioService) {

    var self = this;
    self.usuario = {};
    self.listaUsuarios = [];
    self.mensagemSucesso = '';
    self.mensagemErro = '';
    self.titulo = 'Novo';

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

    function atualizarUsuario(usuario, id){
        console.log('Editando usuário: ' + id);
        usuarioService.atualizarUsuario(usuario, id)
            .then(
                function (response){
                    console.log('Usuário atualizado com sucesso.');
                    self.mensagemSucesso = 'Usuário atualizado com sucesso.';
                    self.mensagemErro = '';
                    $scope.dados.$setPristine();
                    self.usuario = {};
                    self.titulo = 'Novo';
                    getTodosUsuarios();
                },
                function(errResponse){
                    console.error('Erro na atualização do usuário: ' + id);
                    self.mensagemErro = 'Erro na atualização do usuário: ' + errResponse.data;
                    self.mensagemSucesso = '';
                }
            );
    }

    function incluirUsuario(usuario){
        console.log('Incluindo usuário');
        console.log(usuario);
        usuarioService.inserirUsuario(usuario)
            .then(
                function (response){
                    console.log('Usuário incluído com sucesso.');
                    self.mensagemSucesso = 'Usuário incluído com sucesso.';
                    self.mensagemErro = '';
                    $scope.dados.$setPristine();
                    self.usuario = {};
                    getTodosUsuarios();
                },
                function(errResponse){
                    console.error('Erro na inclusão do usuário');
                    self.mensagemErro = 'Erro na atualização do usuário: ' + errResponse.data;
                    self.mensagemSucesso = '';
                }
            );
    }

    function removerUsuario(id) {
        console.log('Iniciando remoção do usuário: ' + id);
        usuarioService.removerUsuario(id)
            .then(
                function(){
                    console.log('Usuário removido com sucesso: ' + id);
                    self.mensagemSucesso = 'Usuário removido com sucesso.';
                    self.mensagemErro = '';
                    getTodosUsuarios();
                },
                function(errResponse){
                    console.error('Erro ao remover o usuário: ' + id + ' - ' + errResponse.data);
                }
            );
    }

    // function habilitarBotao() {
    //     return self.usuario.nome !== undefined && self.usuario.nome !== null
    //         && self.usuario.telefone !== undefined && self.usuario.telefone !== null
    //         && self.usuario.endereco !== undefined && self.usuario.endereco !== null
    //         && self.usuario.dataAdmissao !== undefined && self.usuario.dataAdmissao !== null;
    // }
    
    // BOTOES

    $scope.submit = function submit() {
        console.log('Submit do form.');
        if (self.usuario.usuarioId === undefined || self.usuario.usuarioId === null) {
            console.log('Criando novo usuário: ' + self.usuario);
            incluirUsuario(self.usuario);
        } else {
            console.log('Atualizando o usuário: ' + self.usuario.usuarioId);
            atualizarUsuario(self.usuario, self.usuario.usuarioId);            
        }
    }

    $scope.editar = function editar(id) {
        console.log("Carregando dados do usuário para edição : " + id);
        self.mensagemSucesso = '';
        self.mensagemErro = '';
        self.titulo = 'Editar';
        usuarioService.getUsuario(id).then(
            function (usuario) {
                self.usuario = usuario;
            },
            function (errResponse) {
                console.error('Erro ao buscar usuario ' + id, ' - ' + errResponse.data);
            }
        );
      };

    $scope.remover = function remover(id) {
        removerUsuario(id);
    };

      $scope.limparCampos = function limparCampos() {
        self.usuario = {};
        self.titulo = 'Novo';
      };

    getTodosUsuarios();
});