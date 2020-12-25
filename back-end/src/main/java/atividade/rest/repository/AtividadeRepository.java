package atividade.rest.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import atividade.rest.model.Atividade;

@Repository
public interface AtividadeRepository extends CrudRepository<Atividade, Long>{

}
