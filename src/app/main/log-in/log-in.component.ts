import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //form!:FormGroup;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.router.navigate(['/Userlist'])
    }
  }
  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();
}
