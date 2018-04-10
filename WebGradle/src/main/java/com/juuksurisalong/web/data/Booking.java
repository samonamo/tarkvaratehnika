package com.juuksurisalong.web.data;

import java.lang.reflect.Array;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class Booking {
	@Id
	@GeneratedValue
	long bookingId;
	
	@NotNull
	String reservationDescription;
	String userName;
	String startingTime;
	String endTime;
	String price;
	
	//(tööd,mis broneeris)
	public void setReservationDescription(Array reservationDescription) {
		this.reservationDescription = reservationDescription.toString();
	}
	
	public void setUserName(String firstName, String lastName) {
		this.userName = firstName + " " + lastName;
	}
	
	public void setPrice(String price) {
		this.price = price;
	}
	
	public long getBookingId() {
		return bookingId;
	}

	public String getReservationDescription() {
		return reservationDescription;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public String getPrice() {
		return price;
	}
	
}
