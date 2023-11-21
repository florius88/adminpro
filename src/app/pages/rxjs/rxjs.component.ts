import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe({
      next: valor => console.log('Subs: ', valor),
      error: (error) => console.warn('Error: ', error),
      complete: () => console.info('Obs terminado')
    }) */

    this.retornaIntervalo()
      .subscribe(console.log)

    /* .subscribe(console.log)
    Es el equivalente a:
    .subscribe(
      (valor) => console.log(valor)
    )
    */

  }

  retornaIntervalo(): Observable<number> {

    return interval(1000)
      .pipe(
        take(4),
        map(valor => valor + 1)
      )

  }

  retornaObservable(): Observable<number> {
    let i = -1

    const obs$ = new Observable<number>(observer => {

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

    return obs$

  }

}
