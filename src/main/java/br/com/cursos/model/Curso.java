package br.com.cursos.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "CURSO")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "cursoId")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CURSO_ID", updatable = false, nullable = false)
    private Long cursoId;

    @NotNull
    @Column(name = "TITULO")
    private String titulo;

    @NotNull
    @Column(name = "DESCRICAO")
    private String descricao;

    @NotNull
    @Column(name = "CARGA_HORARIA")
    private Float cargaHoraria;

    @Column(name = "VALOR")
    private Float valor;

    @ManyToMany(fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "cursos")
    private Set<Usuario> usuarios;

    public Curso() {
    }

    public Long getCursoId() {
        return cursoId;
    }

    public void setCursoId(Long cursoId) {
        this.cursoId = cursoId;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Float getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(Float cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public Float getValor() {
        return valor;
    }

    public void setValor(Float valor) {
        this.valor = valor;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
