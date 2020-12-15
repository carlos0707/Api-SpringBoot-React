package atividade.rest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import atividade.rest.model.GrupoDeAtividade;
import atividade.rest.repository.GrupoDeAtividadeRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/grupodeatividade")
public class IndexController {
	
	@Autowired
	private GrupoDeAtividadeRepository grupoDeAtividadeRepository;
	
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<GrupoDeAtividade> init(@PathVariable (value = "id") Long id) {
		
		Optional<GrupoDeAtividade> usuario = grupoDeAtividadeRepository.findById(id);
		
		return new ResponseEntity<GrupoDeAtividade>(usuario.get(), HttpStatus.OK);
	}
	
	@GetMapping(value = "/", produces = "application/json")
	public ResponseEntity<List<GrupoDeAtividade>> usuarios(){
		List<GrupoDeAtividade> list = (List<GrupoDeAtividade>) grupoDeAtividadeRepository.findAll();
		
		return new ResponseEntity<List<GrupoDeAtividade>>(list, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/{id}", produces = "application/text")
	public String delete(@PathVariable("id") Long id) {
		grupoDeAtividadeRepository.deleteById(id);
		
		return "ok";
	}
	
	@PutMapping(value = "/", produces = "application/json")
	public ResponseEntity atualizar(@RequestBody GrupoDeAtividade grupodeatividade){
		
		for(int pos=0; pos < grupodeatividade.getAtividades().size(); pos++) {
			grupodeatividade.getAtividades().get(pos).setGrupodeatividade(grupodeatividade);
		}
		
		GrupoDeAtividade grupoSalvo = grupoDeAtividadeRepository.save(grupodeatividade);
		
		return new ResponseEntity<GrupoDeAtividade>(grupoSalvo, HttpStatus.OK);
	}
	
	@PostMapping(value = "/", produces = "application/json")
	public ResponseEntity cadastrar(@RequestBody GrupoDeAtividade grupodeatividade){
		
		for(int pos=0; pos < grupodeatividade.getAtividades().size(); pos++) {
			grupodeatividade.getAtividades().get(pos).setGrupodeatividade(grupodeatividade);
		}
		
		GrupoDeAtividade grupoSalvo = grupoDeAtividadeRepository.save(grupodeatividade);
		
		return new ResponseEntity<GrupoDeAtividade>(grupoSalvo, HttpStatus.OK);
	}

}
