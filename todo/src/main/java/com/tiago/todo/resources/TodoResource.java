package com.tiago.todo.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tiago.todo.domain.Todo;
import com.tiago.todo.services.TodoService;

@CrossOrigin("*")
@RestController // Requisições Http
@RequestMapping("/todos")
public class TodoResource {

	@Autowired
	private TodoService todoService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Todo> findById(@PathVariable Integer id) {
		
		Todo obj = todoService.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping("/open")
	public ResponseEntity<List<Todo>> listOpen() {
		List<Todo> list = todoService.findAllOpen();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/close")
	public ResponseEntity<List<Todo>> listClose() {
		List<Todo> list = todoService.findAllClose();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping
	public ResponseEntity<List<Todo>> listAll() {
		List<Todo> list = todoService.listAll();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<Todo> create(@RequestBody Todo obj) {
		
		obj = todoService.create(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		
		todoService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Todo> update(@PathVariable Integer id, @RequestBody Todo obj) {
		Todo newObj = todoService.update(id, obj);
		return ResponseEntity.ok().body(newObj);
	}
	
}
