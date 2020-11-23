package br.com.cursos.service;

import br.com.cursos.constantes.OperacaoEnum;
import br.com.cursos.constantes.TipoAuditoriaEnum;
import br.com.cursos.model.Auditoria;
import br.com.cursos.model.Curso;
import br.com.cursos.repository.AuditoriaRepository;
import br.com.cursos.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private AuditoriaRepository auditoriaRepository;

    public List<Curso> findAll() {
        return cursoRepository.findAll();
    }

    public Optional<Curso> findById(Long id) {
        return cursoRepository.findById(id);
    }

    public boolean delete(Long id) {
        Optional<Curso> cursoEncontrado = findById(id);
        if(cursoEncontrado.isPresent()) {
            auditoriaRepository.save(new Auditoria(TipoAuditoriaEnum.CURSO, OperacaoEnum.EXCLUSAO, cursoEncontrado.get().getTitulo()));
            cursoRepository.deleteById(id);
            return !cursoRepository.existsById(id);
        }
        return false;
    }

    public Optional<Curso> save(Curso curso) {
        OperacaoEnum operacao = Objects.isNull(curso.getCursoId()) ? OperacaoEnum.CADASTRO : OperacaoEnum.EDICAO;
        auditoriaRepository.save(new Auditoria(TipoAuditoriaEnum.CURSO, operacao, curso.getTitulo()));
        return Optional.of(cursoRepository.save(curso));
    }

}
