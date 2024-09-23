import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task/task.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { userValidator } from '../../user/userValidator';

@Component({
  selector: 'app-page-comment',
  templateUrl: './page-comment.component.html',
  styleUrl: './page-comment.component.css'
})
export class PageCommentComponent implements OnInit {
  public formCommentAdmin: FormGroup;
  public remarques: any;
  public Object = Object;

  public hiddenComment: boolean = false;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.taskService.getRemarque().subscribe(res => {
      if(res) this.remarques = res
    });

    this.formCommentAdmin = this.formBuilder.group({
      matricule: ['', [ Validators.required, userValidator.matriculeValidator ]],
      message:   ['', [ Validators.required ]]
    })
  }

  public handleSubmitComment(e: Event) {
    e.preventDefault();

    const body = {
      matricule: this.formCommentAdmin.get('matricule')?.value,
      remarque: this.formCommentAdmin.get('message')?.value
    }

    this.taskService.addRemarque(body).subscribe();

    this.hiddenComment = false;
    location.reload();
  }
  
  public toggleComment() {
    this.hiddenComment = !this.hiddenComment;  
  }

  resetComment() {
    this.formCommentAdmin.setValue({
      matricule: '',
      message: ''
    })
  }
}
