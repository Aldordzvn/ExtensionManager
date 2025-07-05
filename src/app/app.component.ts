import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  logoImg = 'images/logo.svg';
  themeImg = 'images/icon-moon.svg';
  toggleThemeBool: boolean = false;

  toggleTheme(){
    this.toggleThemeBool = !this.toggleThemeBool;
    if(this.toggleThemeBool){
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      this.themeImg = 'images/icon-sun.svg';
      console.log(this.toggleThemeBool);
    }else{
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      this.themeImg = 'images/icon-moon.svg';
      console.log(this.toggleThemeBool);
    }
  }
}
