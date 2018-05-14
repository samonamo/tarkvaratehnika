package com.juuksurisalong.web.data;

import java.lang.reflect.Array;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "booking")
@Getter
@Setter
public class Booking {
	@Id
	@GeneratedValue
	long bookingId;
	
	String reservationDescription;
	String userID;
	@NotNull
	String startingTime;
	String endTime;
	String price;
	String month;
	String year;
	String day;
	
	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public void setReservationDescription(Array reservationDescription) {
		this.reservationDescription = reservationDescription.toString();
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
	
	public String getPrice() {
		return price;
	}
	
}
