package com.mg.todoapp.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mg.todoapp.models.dao.TaskCR;
import com.mg.todoapp.models.entity.Task;

@Service
public class TaskServiceImpl implements ITaskService {
	
	@Autowired
	private TaskCR taskCR;
	
	@Override
	@Transactional(readOnly = true)
	public List<Task> findAll() {

		return (List<Task>) taskCR.findAll();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Task findById(Long id) {
		return taskCR.findById(id).orElse(null);
	}
	
	@Override
	@Transactional
	public Task save(Task task) {
		return taskCR.save(task);
	}
	@Override
	@Transactional
	public void delete(Long id) {
		taskCR.deleteById(id);
	}
	
	@Override
	@Transactional
	public Optional<List<Task>> findByFolder(long carpetaId) {
		// TODO Auto-generated method stub
		return taskCR.findByCarpetaId(carpetaId);
	}
}
