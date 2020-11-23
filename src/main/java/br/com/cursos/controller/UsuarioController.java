package br.com.cursos.controller;

import br.com.cursos.model.Usuario;
import br.com.cursos.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping(value = {"", "/"})
    public ResponseEntity<List<Usuario>> getAll() {
        return new ResponseEntity<>(usuarioService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getById(@PathVariable Long id) {
        Optional<Usuario> usuarioEncontrado = usuarioService.findById(id);
        if(usuarioEncontrado.isPresent()) {
            return new ResponseEntity<>(usuarioEncontrado.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = {"", "/"})
    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioEncontrado = usuarioService.save(usuario);
        if(usuarioEncontrado.isPresent()) {
            return new ResponseEntity<>(usuarioEncontrado.get(), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> update(@PathVariable Long id, @RequestBody Usuario usuario) {
        Optional<Usuario> usuarioEncontrado = usuarioService.findById(id);
        if(usuarioEncontrado.isPresent()) {
            usuario.setUsuarioId(usuarioEncontrado.get().getUsuarioId());
            usuarioEncontrado = usuarioService.save(usuario);
            if(usuarioEncontrado.isPresent()) {
                return new ResponseEntity<>(usuarioEncontrado.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        if (!usuarioService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
