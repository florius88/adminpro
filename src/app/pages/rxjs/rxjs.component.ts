import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    let i = -1

    const obs$ = new Observable(observer => {

      const intervalo = setInterval(() => {
        i++
        observer.next(i)

        if (i === 4) {
          clearInterval(intervalo)
          observer.complete()
        }

        if (i === 2) {
          console.log('i = 2.... error');
          observer.error('i llegó al valor 2')
        }

      }, 1000)
    })

    obs$.pipe(
      retry(2)
    ).subscribe({
      next: valor => console.log('Subs: ', valor),
      error: (error) => console.warn('Error: ', error),
      complete: () => console.info('Obs terminado')
    })

  }
}
