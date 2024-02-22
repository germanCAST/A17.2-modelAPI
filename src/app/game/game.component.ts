import { Component, model } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Hijo contador, {{ contador() }}</p>
      <button (click)="explotarContador()">explotar contador</button>
    </div>
  `,
  styles: ``,
})
export class GameComponent {
  contador = model(0);
  explotarContador = () => this.contador.update((v) => v + 1);
}
