package com.mg.todoapp.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mg.todoapp.models.entity.Folder;

public interface FolderCR extends CrudRepository<Folder, Long>{

}
