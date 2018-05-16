package com.juuksurisalong.web;

import static org.mockito.Mockito.times;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.ServiceController;
import com.juuksurisalong.web.data.Service;
import com.juuksurisalong.web.repositories.ServiceRepository;

public class WebGradlePriceListControllerTests {

	private ServiceRepository mockedServiceRepository;
	private ServiceController serviceController;
	private Service service;
	
	@Before
    public void setUp() {
		mockedServiceRepository = Mockito.mock(ServiceRepository.class);
		serviceController = new ServiceController(mockedServiceRepository);
        service = new Service();
      
    }
	
	@Test
	public void testGetFullPriceList() {
		serviceController.getFullService();
		Mockito.verify(mockedServiceRepository, times(1)).findAll();
	}
	
	@Test
	public void testAddPriceList() {
		serviceController.addService(service);
		Mockito.verify(mockedServiceRepository, times(1)).save(service);
	}
}
