package br.com.cursos.service;

import br.com.cursos.model.Auditoria;
import br.com.cursos.repository.AuditoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuditoriaService {

    @Autowired
    private AuditoriaRepository auditoriaRepository;

    public Auditoria save(Auditoria auditoria) {
        return auditoriaRepository.save(auditoria);
    }

}
