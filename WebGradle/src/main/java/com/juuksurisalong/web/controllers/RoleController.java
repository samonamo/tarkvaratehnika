package com.juuksurisalong.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.juuksurisalong.web.data.Role;
import com.juuksurisalong.web.repositories.RoleRepository;

@Controller
@RequestMapping(path="/service") // URL start with /service
public class RoleController {
	
	@Autowired
	private RoleRepository roleRepository;

	public RoleController(RoleRepository roleRepository) {
		this.roleRepository = roleRepository;
	}
	
	@RequestMapping(path="roles/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Role addRole(@RequestBody Role role) {
		//Add role (client/worker)
		roleRepository.save(role);
		return role;
	}
}
