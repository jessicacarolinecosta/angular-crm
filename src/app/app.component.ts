import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  href: string;
  title = 'app-angular-crm';
  opened = true;
  hideMenu = false;

  constructor(translate: TranslateService, private location: Location) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('pt-br');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pt-br');
  }

  ngOnInit() {
    this.href = this.location.path();
    if (this.href === '/' || this.href === '/login') {
      this.opened = false;
      this.hideMenu = true;
    }
  }

}
