package com.juuksurisalong.web;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.UserController;
import com.juuksurisalong.web.data.User;
import com.juuksurisalong.web.repositories.UserRepository;
import static org.mockito.Mockito.times;

public class WebGradleUserControllerTests {
	
	private UserRepository mockedUserRepository;
	private UserController userController;
	private User user;
	private Long id;
	
	@Before
    public void setUp() {
		mockedUserRepository = Mockito.mock(UserRepository.class);
        userController = new UserController(mockedUserRepository);
        user = new User();
    }

	@Test
	public void testUserControllerGetAllUsers() {
		userController.getAllUsers();
        Mockito.verify(mockedUserRepository, times(1)).findAll();
	}
	
	@Test
	public void testUserControllerSaveUser() {
		userController.saveUser(user);
		Mockito.verify(mockedUserRepository, times(1)).save(user);
	}
	
	@Test
	public void testUserControllerGetUserById() {
		id = 10L;
		userController.getUserById(id);
		Mockito.verify(mockedUserRepository, times(1)).findOne(id);
	}

	@Test
	public void testUserControllerUpdateUserById() {
		id = 10L;
		userController.updateUserById(id, user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());
	}
	
	@Test
	public void testUserControllerDeleteUser() {
		userController.deleteUser(user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());

	}
	
	@Test
	public void testUserControllerLogin() {
		userController.login(user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());
	}
		
}
