import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userValidator } from '../../user/userValidator';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  public hiddenAdd: boolean = false;

  public formAddAdmin: FormGroup;
  public isWater: boolean = true;

  public paiementsWater: any[];
  public paiementsElectric: any[];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  public ngOnInit() {
    this.taskService.getPaymentsWater().subscribe(res=> this.paiementsWater = res);
    this.taskService.getPaymentsElectric().subscribe(res=> this.paiementsElectric = res);

    this.formAddAdmin = this.formBuilder.group({
      matricule: ['', [ Validators.required, userValidator.matriculeValidator ]]
    })
  }

  public toggleAdd() {
    this.hiddenAdd = !this.hiddenAdd;
  }

  public handleSubmitAdd(e: Event) {
    e.preventDefault();

    let matricule: any = this.formAddAdmin.get('matricule')?.value;

    if(this.isWater) this.taskService.checkWaterPayment(matricule).subscribe();
    else this.taskService.checkElectricPayment(matricule).subscribe();

    this.hiddenAdd = false;
    this.isWater = true;

    this.formAddAdmin.setValue({
      matricule: ''
    })

    location.reload();
  }

  setChoice(e: Event) {
    let valueSelect = (e.target as HTMLInputElement).value;

    this.isWater = valueSelect == 'water' ? true : false;
  }

}
