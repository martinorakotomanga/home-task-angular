import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { TaskService } from '../task/task.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const taskService = inject(TaskService);
  const router = inject(Router);

  const id = parseInt(taskService.token[0]);
  const idAdmin = [ 1, 2, 4, 5 ];

  if(idAdmin.includes(id) && id>=4 && state.url == '/comment' || idAdmin.includes(id) && id<=2 && state.url == '/admin') {
    return true;
  }

  router.navigate(['/task']);
  return false;
};
