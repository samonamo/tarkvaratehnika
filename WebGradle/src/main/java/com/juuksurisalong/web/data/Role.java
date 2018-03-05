package com.juuksurisalong.web.data;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Role {
	
	@Id
	@GeneratedValue
	long userId;
	String description;

	public void setDescription(String description) {
		this.description = description;
	}

	public long getUserId() {
		return userId;
	}

	public String getDescription() {
		return description;
	}
	
}
