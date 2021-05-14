package com.Manport.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication//
public class BackendApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(BackendApplication.class, args);
	}
/*
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}*/
}
