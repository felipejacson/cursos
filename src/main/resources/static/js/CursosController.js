angular.module('cursosApp').controller('CursosController', function ($scope, cursoService) {

    var self = this;
    self.curso = {};
    self.listaCursos = [];
    self.mensagemSucesso = '';
    self.mensagemErro = '';
    self.titulo = 'Novo';

    function getTodosCursos() {
        cursoService.getTodosCursos().then(
            function (listaCursos) {
                self.listaCursos = listaCursos;
                console.log(self.listaCursos);
            },
            function (errResponse) {
                console.error('Erro ao listar os cursos: ' + errResponse.data);
            }
        );        
    }

    function getById(id) {
        cursoService.getCurso(id).then(
            function (curso) {
                self.curso = curso;
            },
            function (errResponse) {
                console.error('Erro ao buscar curso ' + id, ' - ' + errResponse.data);
            }
        );
    };

    function atualizarCurso(curso, id){
        console.log('Editando curso: ' + id);
        cursoService.atualizarCurso(curso, id)
            .then(
                function (response){
                    console.log('Curso atualizado com sucesso.');
                    self.mensagemSucesso = 'Curso atualizado com sucesso.';
                    self.mensagemErro = '';
                    $scope.dados.$setPristine();
                    self.curso = {};
                    self.titulo = 'Novo';
                    getTodosCursos();
                },
                function(errResponse){
                    console.error('Erro na atualização do curso: ' + id);
                    self.mensagemErro = 'Erro na atualização do curso: ' + errResponse.data;
                    self.mensagemSucesso = '';
                }
            );
    }

    function incluirCurso(curso){
        console.log('Incluindo curso');
        console.log(curso);
        cursoService.inserirCurso(curso)
            .then(
                function (response){
                    console.log('Curso incluído com sucesso.');
                    self.mensagemSucesso = 'Curso incluído com sucesso.';
                    self.mensagemErro = '';
                    $scope.dados.$setPristine();
                    self.curso = {};
                    getTodosCursos();
                },
                function(errResponse){
                    console.error('Erro na inclusão do curso');
                    self.mensagemErro = 'Erro na atualização do curso: ' + errResponse.data;
                    self.mensagemSucesso = '';
                }
            );
    }

    function removerCurso(id) {
        console.log('Iniciando remoção do curso: ' + id);
        cursoService.removerCurso(id)
            .then(
                function(){
                    console.log('Curso removido com sucesso: ' + id);
                    self.mensagemSucesso = 'Curso removido com sucesso.';
                    self.mensagemErro = '';
                    getTodosCursos();
                },
                function(errResponse){
                    console.error('Erro ao remover o curso: ' + id + ' - ' + errResponse.data);
                }
            );
    }
    
    // function habilitarBotao() {
    //     return self.curso.nome !== undefined && self.curso.nome !== null
    //         && self.curso.telefone !== undefined && self.curso.telefone !== null
    //         && self.curso.endereco !== undefined && self.curso.endereco !== null
    //         && self.curso.dataAdmissao !== undefined && self.curso.dataAdmissao !== null;
    // }
    
    // BOTOES

    $scope.submit = function submit() {
        console.log('Submit do form.');
        if (self.curso.cursoId === undefined || self.curso.cursoId === null) {
            console.log('Criando novo curso: ' + self.curso);
            incluirCurso(self.curso);
        } else {
            console.log('Atualizando o curso: ' + self.curso.cursoId);
            atualizarCurso(self.curso, self.curso.cursoId);
        }
    }

    $scope.editar = function editar(id) {
        console.log("Carregando dados do curso para edição : " + id);
        self.mensagemSucesso = '';
        self.mensagemErro = '';
        self.titulo = 'Editar';
        getById(id);
      };

    $scope.remover = function remover(id) {
        removerCurso(id);
    };

      $scope.limparCampos = function limparCampos() {
        self.curso = {};
        self.titulo = 'Novo';
      };

    getTodosCursos();
});