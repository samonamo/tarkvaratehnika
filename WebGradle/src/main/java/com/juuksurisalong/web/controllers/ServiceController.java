package com.juuksurisalong.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.juuksurisalong.web.data.Service;
import com.juuksurisalong.web.repositories.ServiceRepository;

@Controller
@RequestMapping(path="/service") // URL start with /service
public class ServiceController {
	@Autowired
	private ServiceRepository serviceRepository;
	
	public ServiceController(ServiceRepository serviceRepository) {
		this.serviceRepository = serviceRepository;
	}
	
	@RequestMapping(path="price/getlist", method=RequestMethod.GET)
	public @ResponseBody Iterable<Service> getFullService () {
		List<Service> service = serviceRepository.findAll();
			if (!service.isEmpty()) {
				return service;
			}
			return null;
	}
	
	@RequestMapping(path="price/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Service addService(@RequestBody Service service) {
		//Add price list one tab
		serviceRepository.save(service);
		return service;
	}
	
}
