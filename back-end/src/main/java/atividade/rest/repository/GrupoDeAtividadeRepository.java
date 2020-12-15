package atividade.rest.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import atividade.rest.model.GrupoDeAtividade;

@Repository
public interface GrupoDeAtividadeRepository extends CrudRepository<GrupoDeAtividade, Long>{

}
