package com.juuksurisalong.web.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.Booking;

public interface BookingRepository extends CrudRepository<Booking, Long> {
	List<Booking> findAll();
}
