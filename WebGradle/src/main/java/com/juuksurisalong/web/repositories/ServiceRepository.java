package com.juuksurisalong.web.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.Service;

public interface ServiceRepository extends CrudRepository<Service, Long> {
	List<Service> findAll();
}
