package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import model.Igrac;
import model.Tim;


public interface IgracRepository extends JpaRepository<Igrac, Integer> {
	
	@Query("select i from Igrac i where i.tim.imeTIma=:imeTIma")
	public List<Igrac> findAllIgrace(String imeTIma);

	public List<Igrac> findByTim(Tim t);
	
	
		
		


}
