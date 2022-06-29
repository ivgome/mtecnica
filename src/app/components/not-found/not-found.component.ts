import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h2>404</h2>
      <p>La ruta establecida no existe</p>
      <a routerLink="">Volver a inicio</a>
    </div>
  `,
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
