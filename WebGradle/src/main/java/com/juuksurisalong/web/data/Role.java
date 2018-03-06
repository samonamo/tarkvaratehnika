package com.juuksurisalong.web.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
	
	@Id
	@GeneratedValue
	long roleId;
	@NotNull
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
