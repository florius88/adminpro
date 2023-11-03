import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  public linkTheme = document.querySelector('#theme')
  public links!: NodeListOf<Element>;


  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector')
    this.checkCurrentTheme()
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

    this.links.forEach(elem => {

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
