package com.juuksurisalong.web.data;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Role {
	
	@Id
	@GeneratedValue
	long roleId;
	String description;

	public void setDescription(String description) {
		this.description = description;
	}

	public long getRoleId() {
		return roleId;
	}

	public String getDescription() {
		return description;
	}
	
}
