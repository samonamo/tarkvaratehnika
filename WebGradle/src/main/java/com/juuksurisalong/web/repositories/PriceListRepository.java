package com.juuksurisalong.web.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juuksurisalong.web.data.PriceList;

public interface PriceListRepository extends CrudRepository<PriceList, Long> {
	List<PriceList> findAll();
}
