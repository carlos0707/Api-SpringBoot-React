package atividade.rest.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ForeignKey;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Atividade {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String titulo;
	
	private String descricao;
	
	@JsonIgnore
	@ForeignKey(name = "grupodeatividade_id")
	@ManyToOne(optional = false)
	private GrupoDeAtividade grupodeatividade;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public GrupoDeAtividade getGrupodeatividade() {
		return grupodeatividade;
	}

	public void setGrupodeatividade(GrupoDeAtividade grupodeatividade) {
		this.grupodeatividade = grupodeatividade;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	
}
