import { Component } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent {

  public linkTheme = document.querySelector('#theme')


  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`

    this.linkTheme?.setAttribute('href', url)

    // Vamos a guardar los settings para que, si recargo la pantalla
    // no se pierda el tema que hemos elegido.
    localStorage.setItem('theme', url)

  }

}
