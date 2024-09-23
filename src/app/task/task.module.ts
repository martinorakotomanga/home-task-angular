import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTaskComponent } from './home-task/home-task.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarTaskComponent } from './calendar-task/calendar-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProfilComponent } from './profil/profil.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { NavDirectiveDirective } from './nav-directive.directive';
import { GroundComponent } from './ground/ground.component';
import { MsgPageComponent } from './msg-page/msg-page.component';
import { authGuard } from '../auth.guard';
import { DayTaskBgColorPipe } from './day-task-bg-color.pipe';
import { FormsModule } from '@angular/forms';
import { SpinComponent } from '../spin/spin.component';

const taskRoutes: Routes = [
  { path:'task', component: GroundComponent, canActivateChild: [authGuard], children: [
    { path: 'home', component: HomeTaskComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'calendar',component: CalendarTaskComponent },
    { path: 'list',component: TaskListComponent },
    { path: 'profil',component: ProfilComponent },
    { path: 'message', component: MsgPageComponent }
  ]}
];

@NgModule({
  declarations: [
    HomeTaskComponent,
    CalendarTaskComponent,
    TaskListComponent,
    ProfilComponent,
    NavPageComponent,
    NavDirectiveDirective,
    GroundComponent,
    MsgPageComponent,
    DayTaskBgColorPipe,
    SpinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(taskRoutes)
  ]
})
export class TaskModule { }
