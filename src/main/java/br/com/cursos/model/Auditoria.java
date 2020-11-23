package br.com.cursos.model;

import br.com.cursos.constantes.OperacaoEnum;
import br.com.cursos.constantes.TipoAuditoriaEnum;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Document(collection = "AUDITORIA")
public class Auditoria {

    @Id
    private String id;
    private TipoAuditoriaEnum tipo;
    private OperacaoEnum operacao;
    private String nomeCadastro;
    private LocalDateTime dataAuditoria;

    public Auditoria(TipoAuditoriaEnum tipo, OperacaoEnum operacao, String nomeCadastro) {
        this.tipo = tipo;
        this.operacao = operacao;
        this.nomeCadastro = nomeCadastro;
        this.dataAuditoria = LocalDateTime.now(ZoneId.of("America/Sao_Paulo"));
        System.out.println(this.dataAuditoria);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public TipoAuditoriaEnum getTipo() {
        return tipo;
    }

    public void setTipo(TipoAuditoriaEnum tipo) {
        this.tipo = tipo;
    }

    public OperacaoEnum getOperacao() {
        return operacao;
    }

    public void setOperacao(OperacaoEnum operacao) {
        this.operacao = operacao;
    }

    public String getNomeCadastro() {
        return nomeCadastro;
    }

    public void setNomeCadastro(String nomeCadastro) {
        this.nomeCadastro = nomeCadastro;
    }

    public LocalDateTime getDataAuditoria() {
        return dataAuditoria;
    }

    public void setDataAuditoria(LocalDateTime dataAuditoria) {
        this.dataAuditoria = dataAuditoria;
    }
}
