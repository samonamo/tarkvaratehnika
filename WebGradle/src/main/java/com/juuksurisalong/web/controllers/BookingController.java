package com.juuksurisalong.web.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.juuksurisalong.web.data.Booking;
import com.juuksurisalong.web.repositories.BookingRepository;

public class BookingController {
	private BookingRepository bookingRepository;
	
	public BookingController(BookingRepository bookingRepository) {
		this.bookingRepository = bookingRepository;
	}
	
	@RequestMapping(path="booking/getbookings", method=RequestMethod.GET)
	public @ResponseBody List<Booking> getFullPriceList () {
		List<Booking> booking = bookingRepository.findAll();
			if (!booking.isEmpty()) {
				return booking;
			}
			return null;
	}
	
	@RequestMapping(path="booking/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Booking addBooking(@RequestBody Booking booking) {
		bookingRepository.save(booking);
		return booking;
	}
	
}
