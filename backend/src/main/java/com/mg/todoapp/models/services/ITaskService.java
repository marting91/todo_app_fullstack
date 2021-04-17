package com.mg.todoapp.models.services;

import java.util.List;
import java.util.Optional;

import com.mg.todoapp.models.entity.Task;

public interface ITaskService {
	public List<Task> findAll();
	
	public Optional<List<Task>> findByFolder(long idFolder);
	
	public Task findById(Long id);
	
	public Task save(Task folder);
	
	public void delete(Long id);
}
