import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  public linkTheme = document.querySelector('#theme')

  ngOnInit(): void {

    // Recuperamos el tema sel localStorage, si es que hubiera guardado
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linkTheme?.setAttribute('href', url)

  }

}
