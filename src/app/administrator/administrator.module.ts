import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PageCommentComponent } from './page-comment/page-comment.component';
import { adminGuard } from './admin.guard';
import { authGuard } from '../auth.guard';

const adminRoutes: Routes = [
  { path: 'admin', component: PageComponent, canActivate:[adminGuard, authGuard] },
  { path: 'comment', component: PageCommentComponent, canActivate:[adminGuard, authGuard] }
]

@NgModule({
  declarations: [
    PageComponent,
    PageCommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdministratorModule { }
