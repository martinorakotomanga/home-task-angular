import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const userRoutes: Routes = [
  { path: "form", component: UserFormComponent },
  { path: "", redirectTo: "form", pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
