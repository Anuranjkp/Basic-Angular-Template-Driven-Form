import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  

  data = {
    firstName:'',
    lastName:'',
    phone:'',
    email:''
  }
  onSubmit() {
    alert(JSON.stringify(this.data))
  }

  ngOnInit(): void {
  }

}
