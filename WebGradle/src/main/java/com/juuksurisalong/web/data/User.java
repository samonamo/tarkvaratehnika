package com.juuksurisalong.web.data;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
	@Id()
	@GeneratedValue
	long userId;
	@NotNull
	String email;
	@NotNull
	String password;
	String firstName;
	String lastName;
	Date dateOfBirth;
	@ManyToOne
	@JoinColumn(name="roleId")
	Role role;
	boolean emailConfirmed;
	String errorMsg;
	
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public void setEmailConfirmed(boolean emailConfirmed) {
		this.emailConfirmed = emailConfirmed;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public long getUserId() {
		return userId;
	}
	public String getEmail() {
		return email;
	}
	public String getPassword() {
		return password;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public Role getRole() {
		return role;
	}
	public boolean isEmailConfirmed() {
		return emailConfirmed;
	}

	
}
