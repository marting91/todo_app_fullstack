package com.mg.todoapp.controllers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mg.todoapp.models.entity.Folder;
import com.mg.todoapp.models.entity.Task;
import com.mg.todoapp.models.services.FolderServiceImpl;
import com.mg.todoapp.models.services.TaskServiceImpl;

// Habilito CORS para las peticiones desde el frontend de REACT
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class FolderRestController {
	
	@Autowired
	private FolderServiceImpl folderService;
	
	@Autowired
	private TaskServiceImpl taskService;
	
	@GetMapping("/folders")
	public ResponseEntity<List<Folder>> getFolders() {
		return new ResponseEntity<>(folderService.findAll(), HttpStatus.OK);		
	}
	
	@PostMapping("/folders")
	public Folder saveFolder(@RequestBody Folder folder) {
		return folderService.save(folder);
	}
	
	@DeleteMapping("/folders/{id}")
	public void deleteFolder(@PathVariable("id") long carpetaId) {
		folderService.delete(carpetaId);
	}
	
	@GetMapping("/folders/tasks")
	public ResponseEntity<List<Task>> getTasksByFolder(@RequestParam("carpetaId") long carpetaId) {
		try {
			List<Task> tasks = taskService.findByFolder(carpetaId).orElse(null);
			return new ResponseEntity<>(tasks, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/folders/tasks")
	public Task saveTask(@RequestBody Task task) {
		return taskService.save(task);
	}
	
	@PutMapping("/folders/tasks/{idTask}")
	public Task updateTaks(@RequestBody Task task, @PathVariable long idTask) {
		Task currentTask = taskService.findById(idTask);
		currentTask.setNombre(task.getNombre());
		currentTask.setEstado(task.getEstado());
		
		return taskService.save(currentTask);
	}
	
	@DeleteMapping("/folders/tasks/{id}")
	public void deleteTask(@PathVariable("id") long idTask) {
		taskService.delete(idTask);
	}
	
	
}
