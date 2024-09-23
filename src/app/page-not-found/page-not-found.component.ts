import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class=" w-100 position-fixed">
    <div class="container mt-5 w-50 text-center p-5">
        <div class="card border-0 rounded-1">
            <div class="card-header p-4">
                <h4>Hey, Cette page n'existe pas !</h4>
            </div>
            <div class="card-body w-100">
              <div>
                <img src="../../../assets/img/Humaaans - Chill at Home.png" alt="">
              </div>
              <div class="text-end">
                <button class="btn rounded-1 px-4 text-white" routerLink="/task/home">Retour</button>
              </div>
            </div>
        </div>
    </div>
  </div>
  `,
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {

  public ngOnInit() {
    setTimeout(async ()=> {
      console.log('en attent');
    }, 1000);
  }
  
}
