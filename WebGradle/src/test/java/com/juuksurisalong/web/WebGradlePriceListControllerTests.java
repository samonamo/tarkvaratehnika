package com.juuksurisalong.web;

import static org.mockito.Mockito.times;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.juuksurisalong.web.controllers.PriceListController;
import com.juuksurisalong.web.data.PriceList;
import com.juuksurisalong.web.repositories.PriceListRepository;

public class WebGradlePriceListControllerTests {

	private PriceListRepository mockedPriceListRepository;
	private PriceListController priceListController;
	private PriceList priceList;
	
	@Before
    public void setUp() {
		mockedPriceListRepository = Mockito.mock(PriceListRepository.class);
		priceListController = new PriceListController(mockedPriceListRepository);
        priceList = new PriceList();
      
    }
	
	@Test
	public void testGetFullPriceList() {
		priceListController.getFullPriceList();
		Mockito.verify(mockedPriceListRepository, times(1)).findAll();
	}
	
	@Test
	public void testAddPriceList() {
		priceListController.addPriceList(priceList);
		Mockito.verify(mockedPriceListRepository, times(1)).save(priceList);
	}
}
