package com.juuksurisalong.web.repositories;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.Users;


public interface UserRepository extends CrudRepository<Users, Long> {

}
