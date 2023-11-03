import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private linkTheme = document.querySelector('#theme')

  constructor() {

    // Recuperamos el tema sel localStorage, si es que hubiera guardado
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linkTheme?.setAttribute('href', url)

   }

   /**
   * Cambia el tema principal
   *
   * @param theme
   */
  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`

    this.linkTheme?.setAttribute('href', url)

    // Vamos a guardar los settings para que, si recargo la pantalla
    // no se pierda el tema que hemos elegido.
    localStorage.setItem('theme', url)

    this.checkCurrentTheme()

  }

  /**
   * Comprueba si hay tema
   */
  checkCurrentTheme() {

    /* Si fuera algo muy pesado, no debería hacerse de esta manera
     Para solucionar esto, lo suyo es que en el ngOnInit, le mandemos
     como referencia los enlaces que vamos a necesitar para trabajar
    */
    const links = document.querySelectorAll('.selector')

    links.forEach(elem => {

      // Borramos la clase working por si acaso tuviera alguna seleccionada
      elem.classList.remove('working')

      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href')

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working')
      }

    })

  }
}
