package com.juuksurisalong.web.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {
	List<Role> findByDescription(String description);

}