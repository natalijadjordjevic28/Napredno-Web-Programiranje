package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Tim;

public interface TimRepository extends JpaRepository<Tim, Integer> {

}
