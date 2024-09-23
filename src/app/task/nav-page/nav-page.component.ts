import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent implements OnInit {
  public spin: boolean;

  public namePage: string[] = [
    'home',
    'calendar',
    'list',
    'profil',
    'message'
  ];

  public iElements: NodeListOf<HTMLElement>;

  public document = document;
  public isAdministrator: boolean;
  public isAdminComment: boolean;
  public idAdmin: number[] = [1, 2, 4, 5];

  constructor(
    private router: Router,
    private cookie: CookieService
  ) {}

  public ngOnInit() {
    const id = parseInt(this.cookie.get('token')[0]);

    this.isAdministrator = this.idAdmin.includes(id) ? true : false;
    this.isAdminComment = this.isAdministrator && id >=4 ? true : false;
    
    this.iElements = this.document.querySelectorAll('i');

    let indexPage: number = this.namePage.indexOf(this.router.url.split('/')[2]);
    let secondClass = this.iElements[indexPage].classList[1];

    if(!secondClass.includes('-fill')) {
      this.iElements[indexPage].classList.replace(secondClass, secondClass + '-fill');
      this.iElements[indexPage].style.borderBottom = '2px solid #3f51b5';
      this.iElements[indexPage].style.color = '#3f51b5';
    }
  }

  public goToAnotherPage(url: string) {
    let ActivateUrl = this.router.url;

    if(ActivateUrl!=url) {
      this.spin = true;
      setTimeout(()=> {
        this.router.navigate([url]);
        this.spin = false;
      }, 200);
    }
  }
}
