package com.tiago.todo.configuration;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.tiago.todo.services.DBService;

@Configuration
@Profile("test")
public class TestConfig {

	/*Sempre que o perfil ativo for o perfil de "test"*/
	
	@Autowired
	private DBService dbService;
	
	
	
}
