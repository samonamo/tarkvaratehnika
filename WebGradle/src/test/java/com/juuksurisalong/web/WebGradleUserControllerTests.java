package com.juuksurisalong.web;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.UserController;
import com.juuksurisalong.web.data.PriceList;
import com.juuksurisalong.web.data.Role;
import com.juuksurisalong.web.data.User;
import com.juuksurisalong.web.repositories.PriceListRepository;
import com.juuksurisalong.web.repositories.RoleRepository;
import com.juuksurisalong.web.repositories.UserRepository;
import static org.mockito.Mockito.times;
public class WebGradleUserControllerTests {
	
	private UserRepository mockedUserRepository;
	private RoleRepository mockedRoleRepository;
	private PriceListRepository mockedPriceListRepository;
	private UserController userController;
	private User user;
	private Role role;
	private PriceList priceList;
	private Long id;
	
	@Before
    public void setUp() {
		mockedUserRepository = Mockito.mock(UserRepository.class);
		mockedRoleRepository = Mockito.mock(RoleRepository.class);
		mockedPriceListRepository = Mockito.mock(PriceListRepository.class);
        userController = new UserController(mockedUserRepository, mockedRoleRepository, mockedPriceListRepository);
        user = new User();
        role = new Role();
    }

	@Test
	public void testGetAllUsers() {
		userController.getAllUsers();
        Mockito.verify(mockedUserRepository, times(1)).findAll();
	}
	
	@Test
	public void testSaveUser() {
		userController.saveUser(user);
		Mockito.verify(mockedUserRepository, times(1)).save(user);
	}
	
	@Test
	public void testGetUserById() {
		id = 10L;
		userController.getUserById(id);
		Mockito.verify(mockedUserRepository, times(1)).findOne(id);
	}

	@Test
	public void testUpdateUserById() {
		id = 10L;
		userController.updateUserById(id, user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());
	}
	
	@Test
	public void testDeleteUser() {
		userController.deleteUser(user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());

	}
	
	@Test
	public void testLogin() {
		userController.login(user);
		Mockito.verify(mockedUserRepository, times(1)).findByEmail(user.getEmail());
	}
	
	@Test
	public void testAddRole() {
		userController.addRole(role);
		Mockito.verify(mockedRoleRepository, times(1)).save(role);
	}
	
	@Test
	public void testGetFullPriceList() {
		userController.getFullPriceList();
		Mockito.verify(mockedPriceListRepository, times(1)).findAll();
	}
	
	@Test
	public void testAddPriceList() {
		priceList = new PriceList();
		userController.addPriceList(priceList);
		Mockito.verify(mockedPriceListRepository, times(1)).save(priceList);
	}
	
	
}
