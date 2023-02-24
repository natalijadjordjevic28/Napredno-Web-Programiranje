package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Vesti;

public interface VestiRepository extends JpaRepository<Vesti, Integer> {

}
