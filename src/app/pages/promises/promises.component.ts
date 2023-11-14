import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })

    /* const promesa = new Promise((resolve, reject) => {

      if (false) {
        resolve('Hola Mundo')
      }
      else {
        reject('Algo salió mal')
      }

    })

    promesa.then(() => {
      console.log('Terminé');
    })
      .catch(error => console.log('Error en mi promesa', error)
      ) */

  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body.data))
    })

  }



}
