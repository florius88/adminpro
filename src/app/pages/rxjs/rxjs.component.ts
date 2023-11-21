import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, take, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription

  constructor() {

    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe({
      next: valor => console.log('Subs: ', valor),
      error: (error) => console.warn('Error: ', error),
      complete: () => console.info('Obs terminado')
    }) */

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(console.log)

    /* .subscribe(console.log)
    Es el equivalente a:
    .subscribe(
      (valor) => console.log(valor)
    )
    */

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  retornaIntervalo(): Observable<number> {

    return interval(200)
      .pipe(
        map(valor => valor + 1), // 0 => 1
        // division sintetica, nos dice si el valor es par
        filter(valor => (valor % 2 === 0) ? true : false),
        // take(10),
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
