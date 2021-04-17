package com.mg.todoapp.models.services;

import java.util.List;
//import java.util.Optional;

import com.mg.todoapp.models.entity.Folder;

public interface IFolderService {
	public List<Folder> findAll();
	
	public Folder findById(Long id);
	
	public Folder save(Folder folder);
	
	public void delete(Long id);
}
