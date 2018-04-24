package com.juuksurisalong.web;

import static org.junit.Assert.*;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.juuksurisalong.web.controllers.UserController;
import com.juuksurisalong.web.repositories.UserRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class IntegrationTest {

	@Autowired
	private UserRepository userRepo;
	
	
	@Test
	public void testGetRightFirstNameFromDataBaseWithUserId() {
		UserController userController = new UserController(userRepo);
		assertEquals("Tom", userController.getUserById(23).getFirstName());
	}
	
	@Test
	public void testGetRightEmailFromDataBaseWithUserId() {
		UserController userController = new UserController(userRepo);
		assertEquals("TomJerry@gmail.com", userController.getUserById(23).getEmail());
	}

}
