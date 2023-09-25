package com.tiago.todo.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiago.todo.domain.Todo;
import com.tiago.todo.repositories.TodoRepository;

@Service
public class DBService {

	/*
	@Autowired
	private TodoRepository todoRepository;

	public void instanciaBaseDeDados() throws ParseException {

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		Todo t1 = new Todo(null, "Estudar", "Estudar Spring Boot e Angular",
				sdf.parse("30/10/2023"), false);
		
		Todo t2 = new Todo(null, "Treinar", "Peito, Triceps e Ombro", sdf.parse("21/09/2022"), false);
		Todo t3 = new Todo(null, "Comer", "Almoço", sdf.parse("21/09/2023 17:00"), true);
		Todo t4 = new Todo(null, "Jogar", "VALORANT", sdf.parse("23/09/2023 17:00"), true);
		Todo t5 = new Todo(null, "Jogar", "minecraft", sdf.parse("23/09/2023 17:00"), false);
		Todo t6 = new Todo(null, "Jogar", "Rdr2", sdf.parse("23/09/2023 17:00"), false);

		Todo t7 = new Todo(null, "Tocar violao", "aprender a musica e tudo sobre vc - morada", sdf.parse("23/09/2023 17:00"), false);

		todoRepository.saveAll(Arrays.asList(t1, t2,t3, t4,t5,t6,t7));
	}
*/
}
