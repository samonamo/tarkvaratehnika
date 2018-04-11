package com.juuksurisalong.web;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.BookingController;
import com.juuksurisalong.web.data.Booking;
import com.juuksurisalong.web.repositories.BookingRepository;


public class WebGradleBookingControllerTests {

	private BookingRepository mockedBookingRepository;
	private BookingController bookingController;
	private Booking booking;
	
	@Before
    public void setUp() {
		mockedBookingRepository = Mockito.mock(BookingRepository.class);
		bookingController = new BookingController(mockedBookingRepository);
        booking = new Booking();
      
    }
	@Test
	public void testGetAllBookings() {
		bookingController.getAllBookings();
		Mockito.verify(mockedBookingRepository, times(1)).findAll();
	}
	

	@Test
	public void testAddBooking() {
		bookingController.addBooking(booking);
		Mockito.verify(mockedBookingRepository, times(1)).save(booking);
	}
}
