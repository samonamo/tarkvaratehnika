package com.juuksurisalong.web.controllers;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.common.hash.Hashing;
import com.juuksurisalong.web.data.PriceList;
import com.juuksurisalong.web.data.Role;
import com.juuksurisalong.web.data.User;
import com.juuksurisalong.web.repositories.RoleRepository;
import com.juuksurisalong.web.repositories.UserRepository;
import com.juuksurisalong.web.repositories.PriceListRepository;


@Controller
@RequestMapping(path="/service") // URL start with /service
public class UserController {
	@Autowired 
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PriceListRepository priceListRepository;

	@RequestMapping(path="users/{id}", method=RequestMethod.GET)
	public @ResponseBody User getUserById(@PathVariable("id") long id) {
		// This returns a JSON with one user
		return userRepository.findOne(id);
	}
	
	@RequestMapping(path="users/{id}", method=RequestMethod.PUT, consumes="application/json")
	public @ResponseBody User updateUserById(@PathVariable("id") long id, @RequestBody User user) {
		User dbUser = userRepository.findByEmail(user.getEmail());
		if (dbUser!=null && dbUser.getPassword().equals(hashing(user.getPassword()))) {
			dbUser = user;
			userRepository.save(dbUser);
		} else {
			//400 Bad Request
		}
		return dbUser;
	}

	@RequestMapping(path="users/all", method=RequestMethod.GET)
	public @ResponseBody Iterable<User> getAllUsers() {
		List<User> users = userRepository.findAll();
		if (!users.isEmpty()) {
			return users;
		}
		return null;
	}
	
	@RequestMapping(path="users/register", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody User saveUser(@RequestBody User user) {
		//Register user 
		if (userRepository.findByEmail(user.getEmail())==null) {
			user.setPassword(hashing(user.getPassword()));
			userRepository.save(user);
		} else {
			//400 Bad Request
		}
		
		return user;
	}
	
	@RequestMapping(path="users/delete", method=RequestMethod.DELETE, consumes="application/json")
	public @ResponseBody User deleteUser(@RequestBody User user) {
		//Delete user
		User dbUser = userRepository.findByEmail(user.getEmail());
		if (dbUser!=null && dbUser.getPassword().equals(hashing(user.getPassword()))) {
			userRepository.delete(user.getUserId());
		} else {
			//400 Bad Request
		}
		
		return dbUser;
	}
	
	@RequestMapping(path="/login", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody User login(@RequestBody User user) {
		//User data check
		User dbUser = userRepository.findByEmail(user.getEmail());
		if (dbUser!=null && dbUser.getPassword().equals(hashing(user.getPassword()))) {
			return dbUser;
		} else {
			return null;
		}
		
	}

	@RequestMapping(path="roles/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Role addRole(@RequestBody Role role) {
		//Add role (client/worker)
		roleRepository.save(role);
		return role;
	}
	
	@RequestMapping(path="price/getlist", method=RequestMethod.GET, consumes="application/json")
	public @ResponseBody Iterable<PriceList> getFullPriceList () {
		List<PriceList> pricelist = priceListRepository.findAll();
			if (!pricelist.isEmpty()) {
				return pricelist;
			}
			return null;
	}
	
	private String  hashing(String originalPassword) {
			return Hashing.sha256().hashString(originalPassword + "kala", StandardCharsets.UTF_8).toString();
	}
}