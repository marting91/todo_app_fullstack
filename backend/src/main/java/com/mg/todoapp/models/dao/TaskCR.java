package com.mg.todoapp.models.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.mg.todoapp.models.entity.Task;

public interface TaskCR extends CrudRepository<Task, Long>{

		Optional<List<Task>> findByCarpetaId(long carpetaId);
}
