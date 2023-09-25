import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) {
  }

  update() : void {
    this.todoService.update(this.todo)
    .subscribe((respostas) => {
      this.todoService.message("Tarefa atualizada com sucesso!");
      this.router.navigate(['']);
    }, error => {
      this.todoService.message("Falha ao atualizar a tarefa!")
      this.router.navigate(['']);
    })
  }

  findById(): void {
    this.todoService.findById(this.todo.id)
    .subscribe((resposta) => {
      this.todo = resposta;
    })
  }

  formataData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!
    this.findById();
  }

}



