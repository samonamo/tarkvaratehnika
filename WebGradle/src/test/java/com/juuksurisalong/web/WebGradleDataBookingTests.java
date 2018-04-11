package com.juuksurisalong.web;

import static org.junit.Assert.*;

import java.lang.reflect.Array;

import org.junit.Before;
import org.junit.Test;

import com.juuksurisalong.web.data.Booking;
import com.juuksurisalong.web.data.PriceList;

public class WebGradleDataBookingTests {

	private Booking booking;
	private String price;
	private String firstName;
	private String lastName;
//	private String[] reservationDescription = new String[] {"lõikus", "soeng", "värvimine"};
	
	@Before 
	public void setUp() {
		booking = new Booking();
	}
	
	@Test
	public void testIfCorrectPriceIsReturned() {
		price = "50€";
		booking.setPrice(price);
		assertEquals("50€", booking.getPrice());
	}
	
	@Test
	public void testIfCorrectUserNameIsReturned() {
		firstName = "Peeter";
		lastName = "Peterson";
		booking.setUserName(firstName, lastName);
		assertEquals("Peeter Peterson", booking.getUserName());
	}		

}
