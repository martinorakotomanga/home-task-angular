import { Component } from '@angular/core';
import { User } from '../user';
import { TaskService } from '../../task/task.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userValidator } from '../userValidator';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  public userForm: FormGroup;
  public user: User = new User();
  public spin: boolean;

  public errorMsg: any = {
    matricule: '',
    password: ''
  };

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.spin = false;

    this.userForm = this.formBuilder.group({
      
      matricule: [
        this.user.matricule, 
        [
          Validators.required,
          userValidator.matriculeValidator
        ]
      ],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]

    });

    const matriculeField = this.userForm.get('matricule');
    const passwordField = this.userForm.get('password');

    this.handleErrorMessage(matriculeField, 'matricule');
    this.handleErrorMessage(passwordField, 'password');

    console.log(matriculeField?.touched);
  }

  handleErrorMessage(c: AbstractControl | null, field: string) {
    c?.valueChanges.pipe(debounceTime(1000)).subscribe(val=> {
      this.setMsg(c, field);
    });
  }

  onSubmit() {
    this.user = {...this.user, ...this.userForm.value };

    this.spin = true;
    this.taskService.Login(this.user).subscribe(res=> {
      setTimeout(()=> {
        this.spin = false;
        if(res) {
          this.router.navigate(['task/home']);
        };
      } , 700); 
    });
  }

  private setMsg(c: AbstractControl, field: string) {
    this.errorMsg[field] = '';

    if(c.invalid) {
      if(c.errors?.['required']) {
        this.errorMsg[field] = 'Champs requis a ' + (field == 'matricule' ? '5 chiffres !' : '8 caractères minimum !');
      } else if(c.errors?.['isNotMatricule']) {
        this.errorMsg[field] = 'Veuillez entrer une nombres a 5 chiffres !';
      } else {
        this.errorMsg[field] = 'Veuillez entrer 8 caractères minimum !';
      }
    }
  }

}
