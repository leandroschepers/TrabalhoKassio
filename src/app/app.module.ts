import { NgModule } from '@angular/core';
// É isso que define o que vai ser um módulo dentro do Angular
import { BrowserModule } from '@angular/platform-browser';
// Nosso módulo vai rodar via browser, então importamos o BrowserModule.
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Especificamos os componentes que teremos nesse módulo.
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  // Especificamos todas as importações extras que iremos utilizar.
  providers: [],
  // É tudo o que vamos prover para os nossos componentes. 
  bootstrap: [AppComponent]
  // Qual o componente que vai inicializar quando essa aplicação começar.
})
export class AppModule { }
// Toda vez que usamos o export nós estamos criando uma classe pública.
