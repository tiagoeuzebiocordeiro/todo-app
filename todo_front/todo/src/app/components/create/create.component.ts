import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private todoService: TodoService, private router: Router) {
  }

  create():void {
    this.formataData();
    this.todoService.create(this.todo)
    .subscribe((resposta) => {
      this.todoService.message("Tarefa criada com sucesso!");
      this.router.navigate(['']);
    }, error => {
      this.todoService.message("Falha ao criar a tarefa.");
      this.router.navigate(['']);
    }
    
    )
  }

  formataData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  ngOnInit(): void {
  }

}
