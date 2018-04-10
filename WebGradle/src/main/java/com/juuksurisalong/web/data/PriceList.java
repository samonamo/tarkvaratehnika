package com.juuksurisalong.web.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "list")
@Getter
@Setter
public class PriceList {
	
	@Id
	@GeneratedValue
	long listedWorkID;
	
	@NotNull
	String name;
	String length;
	String price;
	
	public long getListedWorkID() {
		return listedWorkID;
	}
	public void setListedWorkID(long listedWorkID) {
		this.listedWorkID = listedWorkID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLength() {
		return length;
	}
	public void setLength(String length) {
		this.length = length;
	}
	
}
