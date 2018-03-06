package com.juuksurisalong.web.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.User;


public interface UserRepository extends CrudRepository<User, Long> {
	User findByEmail(String email);

}
