package com.juuksurisalong.web;

import static org.junit.Assert.*;

import java.util.Objects;

import org.junit.Before;
import org.junit.Test;

import com.juuksurisalong.web.data.Service;

public class WebGradleDataPriceListTests {

	private Service newService;
	
	@Before 
	public void setUp() {
		newService = new Service();
	}
	
	@Test
	public void testIfCorrectNameIsReturned() {
		newService.setName("teenuseNimi");
		assertEquals("teenuseNimi", newService.getName());
	}

	@Test
	public void testIfCorrectLengthIsReturned() {
		newService.setLength("1 hour");
		assertEquals("1 hour", newService.getLength());
	}
	
	@Test
	public void testIfListedWorkIdIsNotNull() {
		assertFalse(Objects.isNull(newService.getListedWorkID()));
	}
	
	
	
}
