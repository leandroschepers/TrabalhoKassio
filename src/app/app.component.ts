import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', 
  // Essa é a TAG que é chamada no HTML.
  templateUrl: './app.component.html',
  // Esse é o template.
  styleUrls: ['./app.component.css']
  // É um array onde definimos todos os css que esse componente tem
})
export class AppComponent {
  public todos: Todo[] = [];
  // todos é o nome da nossa variável.
  // public indica que essa variável pode ser acessada por todos, inclusive lá no front pelo html.
  // usamos o : para realizarmos a tipagem da nossa variável.
  public title: String = 'Minhas Tarefas';
  public form!: FormGroup;
  public mode: string = 'list';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])]
    });

    this.load();
  }
  // Método que é chamado toda vez que o componente inicia.

  add(){
    const title = this.form.controls['title'].value;
    // Opção alternativa this.form.value => { title: 'Título' }
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    // retorna o índice do elemento da lista 'todos' que seja igual ao 'todo' passado como parâmetro. Se não encontrar ninguém, retorna -1.
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }

  load() {
    const data = localStorage.getItem('todos');
    if(data){
      this.todos = JSON.parse(data!);
    } else {
      this.todos = [];
    }
  }

  changeMode(mode: string){
    this.mode = mode;
  }
}
