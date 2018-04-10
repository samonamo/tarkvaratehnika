package com.juuksurisalong.web;

import static org.junit.Assert.*;

import java.util.Objects;

import org.junit.Test;

import com.juuksurisalong.web.data.PriceList;

public class WebGradleDataPriceListTests {

	private PriceList newPriceList = new PriceList();
	
	@Test
	public void testIfCorrectNameIsReturned() {
		newPriceList.setName("teenuseNimi");
		assertEquals("teenuseNimi", newPriceList.getName());
	}

	@Test
	public void testIfCorrectLengthIsReturned() {
		newPriceList.setLength("1 hour");
		assertEquals("1 hour", newPriceList.getLength());
	}
	
	@Test
	public void testIfListedWorkIdIsNotNull() {
		assertFalse(Objects.isNull(newPriceList.getListedWorkID()));
	}
	
	
	
}
