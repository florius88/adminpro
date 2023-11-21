import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = ''
  public tituloSubs$: Subscription

  constructor(private router: Router, private route: ActivatedRoute) {

    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe(({ titulo }) => {
        this.titulo = titulo
        document.title = `AdminPro - ${titulo}`
      })

      // console.log(route.snapshot.children[0].data);

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta() {

    return this.router.events
      .pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      )

  }

}
