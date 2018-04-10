package com.juuksurisalong.web;

import static org.junit.Assert.*;

import java.util.Objects;
import org.junit.Test;

import com.juuksurisalong.web.data.Role;
import com.juuksurisalong.web.data.User;

public class WebGradleDataUserTests {

	
	private User newUser = new User();
	private Role newRole = new Role();
	
	@Test
	public void testIfCorrectFirstNameIsReturned() {
		newUser.setFirstName("Mihkel");
		assertEquals("Mihkel", newUser.getFirstName());
	}
	
	@Test
	public void testIfCorrectLastNameIsReturned() {
		newUser.setLastName("Mahl");
		assertEquals("Mahl", newUser.getLastName());
	}
	
	@Test
	public void testIfNewUserIdIsNotNull() {
		assertFalse(Objects.isNull(newUser.getUserId()));
	}
	
	@Test
	public void testIfCorrectEmailIsReturned() {
		newUser.setEmail("Mihkel.Mahl@gmail.com");
		assertEquals("Mihkel.Mahl@gmail.com", newUser.getEmail());
	}
	
	@Test
	public void testIfCorrectPasswordIsReturned() {
		newUser.setPassword("heaparool123");
		assertEquals("heaparool123", newUser.getPassword());
	}
	
	@Test
	public void testIfCorrectRoleIsReturned() {
		newUser.setRole(newRole);
		assertEquals(newRole, newUser.getRole());
	}
	
	@Test
	public void testIfEmailIsConfirmed() {
		newUser.setEmailConfirmed(true);
		assertEquals(true, newUser.isEmailConfirmed());
	}
	
	@Test
	public void testIfEmailIsNotConfirmed() {
		assertEquals(false, newUser.isEmailConfirmed());
	}

	
}
