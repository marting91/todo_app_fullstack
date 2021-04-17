package com.mg.todoapp.models.services;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mg.todoapp.models.dao.FolderCR;
import com.mg.todoapp.models.entity.Folder;

@Service
public class FolderServiceImpl implements IFolderService {

	@Autowired
	private FolderCR folderCR;
	
	@Override
	@Transactional(readOnly = true)
	public List<Folder> findAll() {

		return (List<Folder>) folderCR.findAll();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Folder findById(Long id) {
		return folderCR.findById(id).orElse(null);
	}
	
	@Override
	@Transactional
	public Folder save(Folder folder) {
		// TODO Auto-generated method stub
		return folderCR.save(folder);
	}
	
	@Override
	@Transactional
	public void delete(Long id) {
		// TODO Auto-generated method stub
		folderCR.deleteById(id);
	}

}
