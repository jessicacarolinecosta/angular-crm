import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../../../../services/lead/lead.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads-form',
  templateUrl: './leads-form.component.html',
  styleUrls: ['./leads-form.component.scss']
})
export class LeadsFormComponent implements OnInit {
  leadsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private leadService: LeadService, private router: Router) { }

  ngOnInit() {
      this.leadsForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        state: [''],
        city: [''],
        obs: [''],
    });
  }

  get f() { return this.leadsForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.leadsForm.invalid) {
        return;
    }

    const params = this.leadsForm.value;

    this.leadService.insert(params.name, params.email, params.phone, params.state, params.city, params.obs)
      .subscribe(data => {
        alert("Inclusão realizada com sucesso");
        this.router.navigate(['/leads/list']);
      }, error => {
        alert(error.error.erro);
      },);
  }

  onReset() {
      this.submitted = false;
      this.leadsForm.reset();
  }
}
