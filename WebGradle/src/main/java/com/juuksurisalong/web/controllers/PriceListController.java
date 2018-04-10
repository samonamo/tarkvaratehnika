package com.juuksurisalong.web.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.juuksurisalong.web.data.PriceList;
import com.juuksurisalong.web.repositories.PriceListRepository;

public class PriceListController {
	private PriceListRepository priceListRepository;
	
	public PriceListController(PriceListRepository priceListRepository) {
		this.priceListRepository = priceListRepository;
	}
	@RequestMapping(path="price/getlist", method=RequestMethod.GET)
	public @ResponseBody Iterable<PriceList> getFullPriceList () {
		List<PriceList> pricelist = priceListRepository.findAll();
			if (!pricelist.isEmpty()) {
				return pricelist;
			}
			return null;
	}
	
	@RequestMapping(path="price/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody PriceList addPriceList(@RequestBody PriceList priceList) {
		//Add price list one tab
		priceListRepository.save(priceList);
		return priceList;
	}
}
