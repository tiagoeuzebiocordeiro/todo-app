import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html', 
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  tarefasFinalizadas: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.todoService.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if (todo.finalizado) {
          this.tarefasFinalizadas.push(todo);
        } 
      })
    })
  }

}
