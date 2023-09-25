import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {

  closed = 0;
  todos: Todo[] =[];
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
        } else {
          this.todos.push(todo);
        }
      })
      this.closed = this.tarefasFinalizadas.length;
    })
  }

  delete(id: any) : void {
    this.todoService.delete(id).subscribe(
      (resposta) => {
      if (resposta == null) {
        this.todoService.message("Tarefa deletada com sucesso!");
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    }
    )
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.todoService.update(item).subscribe(
      () => {
        this.todoService.message("Tarefa finalizada com sucesso!");
        this.todos = this.todos.filter(todo => todo.id !== item.id);
        this.closed++;
      }
    )
  }

}
