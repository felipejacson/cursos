package br.com.cursos.repository;

import br.com.cursos.model.Auditoria;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuditoriaRepository extends MongoRepository<Auditoria, String> {
}