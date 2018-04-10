package com.juuksurisalong.web;

import static org.mockito.Mockito.times;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.RoleController;
import com.juuksurisalong.web.data.Role;
import com.juuksurisalong.web.repositories.RoleRepository;

public class WebGradleRoleControllerTests {

	private RoleRepository mockedRoleRepository;
	private RoleController roleController;
	private Role role;
	
	@Before
    public void setUp() {
		mockedRoleRepository = Mockito.mock(RoleRepository.class);
        roleController = new RoleController(mockedRoleRepository);
        role = new Role();
    }
	
	@Test
	public void testAddRole() {
		roleController.addRole(role);
		Mockito.verify(mockedRoleRepository, times(1)).save(role);
	}
	
}
