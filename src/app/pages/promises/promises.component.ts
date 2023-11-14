import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {

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
      )

  }



}
