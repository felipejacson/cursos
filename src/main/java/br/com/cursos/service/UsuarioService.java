package br.com.cursos.service;

import br.com.cursos.constantes.OperacaoEnum;
import br.com.cursos.constantes.TipoAuditoriaEnum;
import br.com.cursos.model.Auditoria;
import br.com.cursos.model.Usuario;
import br.com.cursos.repository.AuditoriaRepository;
import br.com.cursos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AuditoriaRepository auditoriaRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> findById(Long id) {
        return usuarioRepository.findById(id);
    }

    public boolean delete(Long id) {
        Optional<Usuario> usuarioEncontrado = findById(id);
        if(usuarioEncontrado.isPresent()) {
            auditoriaRepository.save(new Auditoria(TipoAuditoriaEnum.USUARIO, OperacaoEnum.EXCLUSAO, usuarioEncontrado.get().getNome()));
            usuarioRepository.deleteById(id);
            return !usuarioRepository.existsById(id);
        }
        return false;
    }

    public Optional<Usuario> save(Usuario usuario) {
        OperacaoEnum operacao = Objects.isNull(usuario.getUsuarioId()) ? OperacaoEnum.CADASTRO : OperacaoEnum.EDICAO;
        auditoriaRepository.save(new Auditoria(TipoAuditoriaEnum.USUARIO, operacao, usuario.getNome()));
        return Optional.of(usuarioRepository.save(usuario));
    }

}
