package com.juuksurisalong.web;

import static org.junit.Assert.*;

import java.util.Objects;

import org.junit.Before;
import org.junit.Test;
import com.juuksurisalong.web.data.Role;

public class WebGradleDataRoleTests {
	
	private Role newRole;
	
	@Before 
	public void setUp() {
		newRole = new Role();
	}
	
	@Test
	public void testIfCorrentDescriptionIsReturned() {
		newRole.setDescription("Something that describes this role.");
		assertEquals("Something that describes this role.", newRole.getDescription());
	}
	
	@Test
	public void testIfNewRoleIdIsNotNull() {
		assertFalse(Objects.isNull(newRole.getRoleId()));
	}
	
	@Test 
	public void testIfNullIsReturnedWhenAskingForNewRoleDescriptionThatHasNotBeenSet() {
		assertTrue(Objects.isNull(newRole.getDescription()));
	}
	
}
