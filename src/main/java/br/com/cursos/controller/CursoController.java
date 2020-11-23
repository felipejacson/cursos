package br.com.cursos.controller;

import br.com.cursos.model.Curso;
import br.com.cursos.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @GetMapping(value = {"", "/"})
    public ResponseEntity<List<Curso>> getAll() {
        return new ResponseEntity<>(cursoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> getById(@PathVariable Long id) {
        Optional<Curso> cursoEncontrado = cursoService.findById(id);
        if (cursoEncontrado.isPresent()) {
            return new ResponseEntity<>(cursoEncontrado.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = {"", "/"})
    public ResponseEntity<Curso> create(@RequestBody Curso curso) {
        Optional<Curso> cursoEncontrado = cursoService.save(curso);
        if (cursoEncontrado.isPresent()) {
            return new ResponseEntity<>(cursoEncontrado.get(), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> update(@PathVariable Long id, @RequestBody Curso curso) {
        Optional<Curso> cursoEncontrado = cursoService.findById(id);
        if (cursoEncontrado.isPresent()) {
            curso.setCursoId(cursoEncontrado.get().getCursoId());
            cursoEncontrado = cursoService.save(curso);
            if (cursoEncontrado.isPresent()) {
                return new ResponseEntity<>(cursoEncontrado.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!cursoService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
